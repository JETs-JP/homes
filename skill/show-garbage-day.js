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
        let messages = [{
            text: `${context.confirmed.garbage_type}`
        }];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
