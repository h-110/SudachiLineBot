module.exports.reply = function (textMessage) {
  var message;

  if (textMessage.indexOf('阿波踊り') != -1 || textMessage.indexOf('阿波おどり') != -1 || textMessage.indexOf('あわおどり') != -1) {
    message = '徳島で一番有名なお祭りなんじょ！また遊びに来てな〜';
  } else if (textMessage.indexOf('名前') != -1) {
    message = 'すだちくんって言うんじょ';
  } else if (textMessage.indexOf('名産') != -1 || textMessage.indexOf('名物') != -1) {
    message = '徳島ラーメンや金長まんじゅうがあるでよ';
  } else if (textMessage.indexOf('性別') != -1) {
    message = '中性なんじょ';
  } else if (textMessage.indexOf('チャームポイント') != -1)  {
    message = '愛くるしい笑顔がチャームポイントやけんな';
  } else if (textMessage.indexOf('夢') != -1) {
    message = '徳島県のことを世界中の人々に知ってもらうことが夢なんよ';
  } else {
    message = 'すだちくんです！何でも聞いてな〜';
  }

  return message;
}
