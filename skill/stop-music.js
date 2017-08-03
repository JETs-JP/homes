'use strict';

const request = require('request');

const volumio = class {
    static stop() {
        request(
            'http://volumio.local/api/v1/commands/?cmd=stop',
            function (error, response, body) {
                console.log('error:', error);
                console.log('statusCode:', response && response.statusCode);
                console.log('body:', body);
            }
        );
    }
}

module.exports = class StopMusic {
    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor(bot, event) {
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    finish(bot, event, context, resolve, reject) {
        volumio.stop();
        let messages = [{
            text: `かしこまりました。`
        }];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
