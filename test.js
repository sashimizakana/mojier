var assert = require('assert');
var mojier = require('./index.js');

function getCharCode(char){
    return (char.charCodeAt(0) - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000;
}

console.log('---mojier test---');
console.log('1.get smile');
var smile = mojier.get('smile');
assert.ok(getCharCode(smile) == 128516);
console.log('[ok]');
console.log('2.find alias smile');
assert.ok(mojier.findAlias(smile) == "smile");
console.log('[ok]');
console.log('3.get all aliases');
assert.ok(mojier.getAllAliases().length > 0);
console.log('[ok]');

console.log('test all ok');
