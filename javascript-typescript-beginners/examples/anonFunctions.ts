const log = () => console.log("Hey!");
log();

//or we can say:

const log2 = (message: string) => console.log(message); //doesn't return anything at all
log2("Hey!"); 
//console.log type is void, because we're returning
//right away from this function, so it's infered the type void