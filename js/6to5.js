// 6to5.js
"use strict";
var x = 5;
var y;

for(var _i = 0; _i < x; _i++){
    var _z = 10;
    y = _i * (_z + x);
    console.log(y + " time: " + _i);
    _z += y;
}
// console.log(i);
// console.log(z);

var _abe = 5;
var _lincoln = 5;

console.log(_abe);
console.log(_lincoln);

var pimp = function(_abe, _lincoln) {
    var _result = ((_abe + _lincoln)).toString();
    return _result;
};
console.log(pimp);
