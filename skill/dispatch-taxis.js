'use strict';

module.exports = class DispatchTaxis {
    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor(bot, event) {
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    finish(bot, event, context, resolve, reject){
        let messages = [{
            text: `依頼が完了しました。日本交通から配車します。到着予定時刻は14:30です。こちらの車とドライバーが伺います。`
        }, {
            type: 'image',
            originalContentUrl: 'https://387329f5.ngrok.io/images/taxi.jpg',
            previewImageUrl: 'https://387329f5.ngrok.io/images/taxi.jpg'
        }, {
            type: 'image',
            originalContentUrl: 'https://387329f5.ngrok.io/images/driver.jpg',
            previewImageUrl: 'https://387329f5.ngrok.io/images/driver.jpg'
        }];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
