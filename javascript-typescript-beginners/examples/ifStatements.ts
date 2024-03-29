//temperatura < 10 -> It's freezing! Wear a coat.
//temperatura < 20 -> It's chilly! Bring a sweater.
//else (catch-all) -> It's warm! Enjoy the sunshine.

let temperature = 19;

if (temperature <= 10) {
    console.log("It's freezing! Wear a coat.")
} else {
    if (temperature <= 20) {
        console.log("It's chilly! Bring a sweater.")
    } else {
        console.log("It's warm! Enjoy the sunshine.")
    }
}

//instead of doing if inside the else, we can: