'use strict';

module.exports = class ShowTrainSchedule {
    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor(bot, event) {
        this.required_parameter = {
            station: {
                message_to_confirm: {
                    type: "text",
                    text: "何駅ですか？"
                }
            }
        };
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    finish(bot, event, context, resolve, reject) {
        let messages = [{
            text: `承知しました！${context.confirmed.station}の時刻表です。`
        }];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
