// Challenge 1: Write a function that takes two numbers as arguments and returns the result of applying a mathematical operator to them. If the operation or the input is invalid, return a string with the error message.

type Operator = "add" | "subtract" | "multiply" | "divide";
type CalculateError = string;

const calculate = (num1: number, num2: number, operator: Operator): number | CalculateError => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Invalit inputs";
    }
    if (operator === "add") {
        return num1 + num2;
    }
    if (operator === "subtract") {
        return num1 - num2;
    }
    if (operator === "multiply") {
        return num1 * num2;
    }
    if (operator === "divide") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    }
    return "Invalid operator";
}

const result = calculate(4, 5, "add"); 
console.log(result);


// Challenge 2: Write a function that takes two numbers as inputs and returns a string indicating their relationship. The possible relationships are equal, not equal, greater than, less than, or invalid. If either of the inputs is not a number, the function should return "invalid".

type Relationship = "equal" | "not-equal" | "greater-than" | "less-than" | "invalid";

const compareNumbers = (n1: number, n2: number): Relationship => {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return "invalid";
    }
    if (n1 === n2) {
        return "equal";
    }
    if (n1 > n2) {
        return "greater-than"
    }
    return "less-than";
}

const relation = compareNumbers(1, 2);
console.log(relation);