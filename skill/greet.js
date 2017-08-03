'use strict';

const GREETING_MAPPINGS = [
    {call: "こんにちは", answer: "こんにちは！"},
    {call: "ハロー", answer: "こんにちは！"},
    {call: "ありがとう", answer: "どういたしまして！"},
    {call: "いいね", answer: "ありがとうございます！"}
];

module.exports = class Greet {
    // コンストラクター。このスキルで必要とする、または指定することができるパラメータを設定します。
    constructor(bot, event) {
    }

    // パラメーターが全部揃ったら実行する処理を記述します。
    finish(bot, event, context, resolve, reject) {
        if (event.message.text === null || event.message.text == "") {
            return reject();
        }
        let answer = {};
        let found_answer = false;
        for (let greeting_mapping of GREETING_MAPPINGS) {
            if (event.message.text.includes(greeting_mapping.call)) {
                answer = greeting_mapping.answer;
                found_answer = true;
            }
        }
        if (!found_answer) {
            return reject();
        }
        let messages = [{
            text: answer
        }];
        return bot.reply(messages).then(
            (response) => {
                return resolve();
            }
        );
    }
};
