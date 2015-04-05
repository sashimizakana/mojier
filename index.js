//もじゃー
var emoji = require('./lib/emoji.js');
module.exports = {
    get:function(alias){
        return emoji[alias] || null;
    }
    ,getAllAliases:function(){
        return Object.keys(emoji);
    }
    ,findAlias:function(code){
        for(var p in emoji){
            if(emoji[p] == code){
                return p;
            }
        }
        return null;
    }
};
