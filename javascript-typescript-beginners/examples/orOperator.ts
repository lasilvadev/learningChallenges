//with the && Operator:
const age = 18;
const hasId = true;
const canDrink = age >= 21 && hasId;
console.log(canDrink); //false
const cannotDrink = !canDrink;
console.log(cannotDrink); //true


//with the || Operator:
const ages = 18;
const hasIds = true;
const canDrinks = ages >= 21 || hasId;
console.log(canDrinks); //true

//also with the AND operator:
const isSunny = true;
const isWarm = true;
const niceDay = isSunny && isWarm;
console.log(niceDay);  //true

// AND ---- complex:
let scores = 85;
const hasPassed = score >= 60;
const hasBonus = score >= 80;
const hasExtraBonus = (scores >= 90 && hasBonus) || score === 100;
console.log(hasExtraBonus); //false

//Let’s say we have something that may be null:
const gift: null | string = "Phone";
const newGift = gift || "Car"; //'Car' if its null / 'Phone' if its "Phone"
console.log(newGift);
//it's a way to abuse truthy/falsy values: NOT RECOMMENDED!
//the code needs to be explicit

//if it's an empy string, newGift will log 'Car' again.
// Now we need to check if it's an empty string and than do the logic, for that we can use:
const present: null | string = "";
//Nullish Coalescing Operator -> take the right-hand side if the left-hand side is null or undefined (not a general falsy value)
const newPresent = present ?? "Car"; //'Car' if its null / 'Phone' if its "Phone"
console.log(newPresent); // ' ' we get an empty string