# Mojier

[![npm version](https://badge.fury.io/js/mojier.svg)](http://badge.fury.io/js/mojier)

Mojier find emoji from alias.
The code map from [gemoji](https://github.com/github/gemoji)/[emoji.json](https://github.com/github/gemoji/blob/master/db/emoji.json).

# Installation

```
npm install mojier
```

# Usage

``` node
var mojier = require('mojier');
var emoji = mojier.get('smile');//U+1F604
mojier.findAlias(emoji);//smile
```

# Enjoy!

:smile::smile::smile::smile:

# License

MIT

---

# もじゃー

emojiの文字をエイリアスから探したり、その逆をしたり。

エイリアスとコードの対応表は[gemoji](https://github.com/github/gemoji)の[emoji.json](https://github.com/github/gemoji/blob/master/db/emoji.json)からつくった。

# インストール

```
npm install mojier
```

# つかいかた

``` node
var mojier = require('mojier');
var emoji = mojier.get('smile');//U+1F604
mojier.findAlias(emoji);//smile
```

# というわけさ

:smile::smile::smile::smile:

# License

MIT
