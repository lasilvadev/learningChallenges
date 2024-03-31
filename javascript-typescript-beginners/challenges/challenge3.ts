// Example function
function calculateAreaOfCircle2(radius: number): number {
    const pi = 3.14;
    const areaCircle = pi * radius * radius;
    return areaCircle;
}


// Challenge: // printAreaOfCirle + template literals
function printAreaOfCirle(areaCircle: number) { //this funtion returns void
    console.log(`The area of the circle is ${areaCircle}`);

}

const result3 = calculateAreaOfCircle2(5);
printAreaOfCirle(result3);
const result4 = calculateAreaOfCircle2(40);
printAreaOfCirle(result4);