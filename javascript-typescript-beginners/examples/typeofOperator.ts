// typeof
function addTwoNumbers(a: number, b: number): number | null {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    return null;
}
//console.log(addTwoNumbers("asd", "xyz"));
console.log(typeof 5);

//more complex

function squareRoot(x: number): number {
    if (typeof x === "number") {
        if (x >= 0) {
            return Math.sqrt(x);
        } else {
            return NaN;
        }
    } else {
        return NaN;
    }
}