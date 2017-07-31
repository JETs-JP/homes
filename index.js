"use strict";

/*
 * Import Packages
 */
let express = require('express');
let bot_express = require("bot-express");
let app = express();

/*
 * Static contents
 */
app.use(express.static('static'));

/*
 * Middleware Configuration
 */
app.listen(process.env.PORT || 5000, () => {
    console.log("server is running...");
});

/*
 * Mount bot-express
 */
app.use("/webhook", bot_express({
    nlp_options: {
        client_access_token: process.env.APIAI_CLIENT_ACCESS_TOKEN,
        language: "ja"
    },
    line_channel_secret: process.env.LINE_CHANNEL_SECRET,
    line_channel_access_token: process.env.LINE_CHANNEL_ACCESS_TOKEN,
}));

module.exports = app;
