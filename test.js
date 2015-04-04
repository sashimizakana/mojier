var assert = require('assert');
var emojier = require('./index.js');

function getCharCode(char){
    return (char.charCodeAt(0) - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000;
}

console.log('---mojier test---');
console.log('1.get smile');
var smile = emojier.get('smile');
assert.ok(getCharCode(smile) == 128516);
console.log('[ok]');
console.log('find alias smile');
assert.ok(emojier.findAlias(smile) == "smile");
console.log('[ok]');
console.log('test all ok');
