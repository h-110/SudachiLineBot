const line = require('@line/bot-sdk');
const express = require('express');
const request = require('request');
var message = require('./message');

// チャンネルトークンとチャンネルシークレットの設定
const config = {
	channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
	channelSecret: process.env.CHANNEL_SECRET
};

// LINE SDKクライアント作成
const client = new line.Client(config);

// Express App作成
const app = express();

const headers = {
	"Content-Type" : "application/json",
	"x-api-key" : process.env.X_API_KEY
}

const body = {
	"botId" : process.env.BOT_ID
}

const options = {
	url : 'https://api.repl-ai.jp/v1/registration',
	method : 'POST',
	headers : headers,
	body : body,
	json : true
}

// Webhook
app.post('/webhook', line.middleware(config), (req, res) => {
	Promise
	.all(req.body.events.map(handleEvent))
	.then((result) => res.json(result));
});

// イベントハンドラー
function handleEvent(event) {
	if(event.type !== 'message' || event.message.type !== 'text') {
		return Promise.resolve(null);
	}

	var replyText = message.reply(event.message.text);

	// 返信メッセージ
	const reply = {
		type : 'text',
		text : replyText
		};

	// リプライAPI
	return client.replyMessage(event.replyToken, reply);
}

// ポート待ち受け
const port = process.env.PORT || 3000;
app.listen(port);
