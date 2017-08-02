'use strict';

module.exports = class ShowGarbageDay {
    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor(bot, event) {
        this.required_parameter = {
            garbage_type: {
                message_to_confirm: {
                    type: "template",
                    altText: "どんなゴミですか？（可燃／不燃／資源／プラスチック／その他）",
                    template: {
                        type: "buttons",
                        text: "どんなゴミですか？",
                        actions: [
                            {type:"postback", label:"可燃", data:"可燃"},
                            {type:"postback", label:"不燃", data:"不燃"},
                            {type:"postback", label:"資源", data:"資源"},
                            {type:"postback", label:"プラスチック", data:"プラスチック"}
                        ]
                    }
                }
            }
        };
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    finish(bot, event, context, resolve, reject) {
        let garbage_day = null;
        if (context.confirmed.garbage_type === '可燃') {
            garbage_day = '毎週水曜、土曜';
        } else if (context.confirmed.garbage_type === '不燃') {
            garbage_day = '第1、第3 火曜';
        } else if (context.confirmed.garbage_type === '資源') {
            garbage_day = '毎週月曜';
        } else if (context.confirmed.garbage_type === 'プラスチック') {
            garbage_day = '毎週木曜';
        }
        let messages = [
            {text: `麹町一丁目偶数番地の${context.confirmed.garbage_type}ゴミ収集日は、` + garbage_day + `です`}
        ];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
