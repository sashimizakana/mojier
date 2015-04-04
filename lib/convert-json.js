//emoji.json加工するやつ
var fs = require('fs');
var _ = require('lodash');
var file = fs.readFileSync('gemoji.json',{encoding:"utf-8"});
var emojis = JSON.parse(file);
var emoji = {};
_.each(emojis,function(e){
    if(e.emoji){
        _.each(e.aliases,function(alias){
           emoji[alias] = e.emoji;
        });
    }
});

fs.writeFileSync("emoji.json",JSON.stringify(emoji));
