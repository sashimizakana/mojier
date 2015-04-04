# mojier(もじゃー)
emojiの文字をエイリアスから引っ張ってくるやーつ

エイリアスとコードの対応表はgemojiの[emoji.json](https://github.com/github/gemoji/blob/master/db/emoji.json)からつくった。

## 概要
emojiの文字をエイリアスから探す。
文字からエイリアスも一応探せる。

## つかいかた
``` node
var mojier = require('mojier');
var emoji = mojier.get('smile');//U+1F604
mojier.findAlias(emoji)//smile
```

## というわけさ
:smile::smile::smile:

#License

MIT
