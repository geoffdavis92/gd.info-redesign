// 6to5.js
var x = 5;
var y;

for(let i = 0; i < x; i++){
	let z = 10;
	y = i * (z + x);
	console.log(y + " time: " + i);
	z += y;
}
// console.log(i);
// console.log(z);

let abe = 5;
let lincoln = 5;

console.log(abe);
console.log(lincoln);

var pimp = (abe,lincoln) => {
	let result = ((abe + lincoln)).toString();
	return result;
};
console.log(pimp);