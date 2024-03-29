const x: null | number = 11;
const y = 5;

if (x === null) {
    console.log(true);
}

console.log(x > 10 && x < 20 && y > 0) //true

//if one of the operands fails, than:
const z: null | number = 11;
const w = -5;

if (x === null) {
    console.log(true);
}

console.log(z > 10 && z < 20 && w > 0) //false