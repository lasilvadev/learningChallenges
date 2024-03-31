function calculateAreaOfCircle(radius: number): number {
    const pi = 3.14;
    const area = pi * radius * radius;
    return area;
}

const result1 = calculateAreaOfCircle(5);
console.log("The area of the circle is " + result1);
const result2 = calculateAreaOfCircle(40);
console.log("The area of the circle is " + result2);


// Area of circle 1
// const radius = 5;
// const areaCircle = pi * radius * radius;
// console.log("The area of the circle is " + areaCircle);

// Area of circle 2
// const radius2 = 40;
// const areaCircle2 = pi * radius2 * radius2;
// console.log("The area of the circle is " + areaCircle2);