'use strict';

var train_schedule_z14 = new Map();
train_schedule_z14.set(1202, "12:02 [普通]久喜行");
train_schedule_z14.set(1207, "12:07 [普通]押上行");
train_schedule_z14.set(1212, "12:12 [普通]南栗橋行");
train_schedule_z14.set(1217, "12:17 [普通]押上行");
train_schedule_z14.set(1222, "12:22 [普通]久喜行");
train_schedule_z14.set(1227, "12:27 [普通]押上行");
train_schedule_z14.set(1232, "12:32 [普通]久喜行");
train_schedule_z14.set(1237, "12:37 [普通]押上行");
train_schedule_z14.set(1242, "12:42 [普通]南栗橋行");
train_schedule_z14.set(1247, "12:47 [普通]押上行");
train_schedule_z14.set(1252, "12:52 [普通]久喜行");
train_schedule_z14.set(1257, "12:57 [普通]押上行");
train_schedule_z14.set(1302, "13:02 [普通]久喜行");
train_schedule_z14.set(1307, "13:07 [普通]押上行");
train_schedule_z14.set(1312, "13:12 [普通]南栗橋行");
train_schedule_z14.set(1317, "13:17 [普通]押上行");
train_schedule_z14.set(1322, "13:22 [普通]久喜行");
train_schedule_z14.set(1327, "13:27 [普通]押上行");
train_schedule_z14.set(1332, "13:32 [普通]久喜行");
train_schedule_z14.set(1337, "13:37 [普通]押上行");
train_schedule_z14.set(1342, "13:42 [普通]南栗橋行");
train_schedule_z14.set(1347, "13:47 [普通]押上行");
train_schedule_z14.set(1352, "13:52 [普通]久喜行");
train_schedule_z14.set(1357, "13:57 [普通]押上行");
train_schedule_z14.set(1402, "14:02 [普通]久喜行");
train_schedule_z14.set(1407, "14:07 [普通]押上行");
train_schedule_z14.set(1412, "14:12 [普通]南栗橋行");
train_schedule_z14.set(1417, "14:17 [普通]押上行");
train_schedule_z14.set(1422, "14:22 [普通]久喜行");
train_schedule_z14.set(1427, "14:27 [普通]押上行");
train_schedule_z14.set(1432, "14:32 [普通]久喜行");
train_schedule_z14.set(1437, "14:37 [普通]押上行");
train_schedule_z14.set(1442, "14:42 [普通]南栗橋行");
train_schedule_z14.set(1447, "14:47 [普通]押上行");
train_schedule_z14.set(1452, "14:52 [普通]久喜行");
train_schedule_z14.set(1457, "14:57 [普通]押上行");
train_schedule_z14.set(1502, "15:02 [普通]久喜行");
train_schedule_z14.set(1507, "15:07 [普通]押上行");
train_schedule_z14.set(1512, "15:12 [普通]南栗橋行");
train_schedule_z14.set(1517, "15:17 [普通]押上行");
train_schedule_z14.set(1522, "15:22 [普通]久喜行");
train_schedule_z14.set(1527, "15:27 [普通]押上行");
train_schedule_z14.set(1532, "15:32 [普通]久喜行");
train_schedule_z14.set(1537, "15:37 [普通]押上行");
train_schedule_z14.set(1542, "15:42 [普通]南栗橋行");
train_schedule_z14.set(1547, "15:47 [普通]押上行");
train_schedule_z14.set(1552, "15:52 [普通]久喜行");
train_schedule_z14.set(1557, "15:57 [普通]押上行");
train_schedule_z14.set(1602, "16:02 [普通]久喜行");
train_schedule_z14.set(1607, "16:07 [普通]押上行");
train_schedule_z14.set(1612, "16:12 [普通]南栗橋行");
train_schedule_z14.set(1617, "16:17 [普通]押上行");
train_schedule_z14.set(1621, "16:21 [普通]久喜行");
train_schedule_z14.set(1626, "16:26 [普通]押上行");
train_schedule_z14.set(1631, "16:35 [普通]久喜行");

var train_schedule_z01 = new Map();
train_schedule_z01.set(1227, "12:27 [普通]押上行");
train_schedule_z01.set(1232, "12:32 [普通]久喜行");
train_schedule_z01.set(1237, "12:37 [普通]押上行");
train_schedule_z01.set(1242, "12:42 [普通]南栗橋行");
train_schedule_z01.set(1247, "12:47 [普通]押上行");
train_schedule_z01.set(1252, "12:52 [普通]久喜行");
train_schedule_z01.set(1257, "12:57 [普通]押上行");

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
        var now = new Date();
        var now_num = (now.getHours() - 1) * 100 + now.getMinutes();

        var z14 = "【押上方面行】";
        for (let [key, value] of train_schedule_z14) {
            let d = key - now_num;
            if (d > 0 && d < 15) {
                z14 += ("\n" + value);
            }
        }
        var z01 = "【渋谷方面行】";
        for (let [key, value] of train_schedule_z01) {
            let d = key - now_num;
            if (d > 0 && d < 15) {
                console.log(key - now_num);
                z01 += ("\n" + value);
            }
        }

        let messages = [
            {text: `承知しました！${context.confirmed.station}の時刻表です。`},
            {text: z14},
            {text: z01}
        ];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
