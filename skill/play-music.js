'use strict';

const request = require('request');

const GENRE_MAPPINGS = [
    {label: "ジャズ", code: "jazz"},
    {label: "jazz", code: "jazz"},
    {label: "ロック", code: "rock"},
    {label: "rock", code: "rock"},
    {label: "クラシック", code: "classical"},
    {label: "classical", code: "classical"},
    {label: "classic", code: "classical"}
];

const volumio = class {
    static play(playlist) {
        var cmd;
        if (!playlist) {
            cmd = 'cmd=play'
        } else {
            cmd = 'cmd=playplaylist&name=' + playlist;
        }
        request(
            'http://volumio.local/api/v1/commands/?' + cmd,
            function (error, response, body) {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
            }
        );
    }
}

module.exports = class PlayMusic {
    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor(bot, event) {
        this.required_parameter = {
            genre: {
                message_to_confirm: {
                    type: "text",
                    text: "どんなのがいいですか？"
                },
                reaction: (error, value, context, resolve, reject) => {
                    if (error) {
                        bot.change_message_to_confirm("genre", {
                            text: "例えばこんなのはどうでしょう？",
                            quick_replies: [
                                {content_type:"text", title:"ジャズ", payload:"jazz"},
                                {content_type:"text", title:"ロック", payload:"rock"},
                                {content_type:"text", title:"クラシック", payload:"classical"}
                            ]
                        });
                    }
                    return resolve();
                }
            }
        };
    }

    parse_genre(value, context, resolve, reject) {
        if (value === null || value == "") {
            return reject();
        }
        let parsed_value = {};
        let found_genre = false;
        for (let genre_mapping of GENRE_MAPPINGS) {
            if (value == genre_mapping.label) {
                parsed_value = genre_mapping.code;
                found_genre = true;
            }
        }
        if (!found_genre) {
            return reject();
        }
        return resolve(parsed_value);
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    finish(bot, event, context, resolve, reject) {
        volumio.play(context.confirmed.genre);
        let messages = [{
            text: `いかがですか？`
        }];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
