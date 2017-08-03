'use strict';

var train_type_asd = [
    "[普通]押上行",
    "[普通]久喜行",
    "[普通]南栗橋行",
    "[普通]清澄白河行",
    "[普通]東武動物公園行",
    "[普通]北越谷行"
];
var train_type_dsd = [
    "[普通]中央林間行",
    "[普通]長津田行",
    "[普通]鷺沼行"
];

const DateWithOffset = require( 'date-with-offset' );

const trainSchedule = class {
    static get(limit, dest_ascending) {
        var schedule = {};
        var type = {};
        if (dest_ascending) {
            schedule = "【押上方面行】";
            type = train_type_asd;
        } else {
            schedule = "【渋谷方面行】";
            type = train_type_dsd;
        }
        var date = new DateWithOffset(540);
        for (var i = 0; i < limit; i++) {
            var max = 5;
            var min = 3;
            var d = Math.floor(Math.random() * (max + 1 - min)) + min;
            date.setMinutes(date.getMinutes() + d);
            schedule += ("\n" +
                ("0" + date.getHours()).slice(-2) + ":" +
                ("0" + date.getMinutes()).slice(-2) + " " +
                type[Math.floor(Math.random() * type.length)]);
        }
        return schedule;
    }
}

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
        let messages = [
            {text: `承知しました！${context.confirmed.station}の時刻表です。`},
            {text: trainSchedule.get(5, true)},
            {text: trainSchedule.get(5, false)}
        ];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
