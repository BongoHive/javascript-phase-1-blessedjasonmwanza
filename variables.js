// you solution should be here
let birthYear = 1998;
let futureYear = 2025;
let futureAge = futureYear - birthYear;
console.log(`by the year ${futureYear}, i'll be ${futureAge} years old \n\n`);

let currentAge = new Date().getFullYear() - birthYear;
let numOfDaysPerYear = 365;
let maxAge = 120;
let perDayUse = 2;
console.log(` Based on my daily intake of ${perDayUse} fruits, i will need ${(perDayUse * numOfDaysPerYear * maxAge) } fruits to last me until my ripe old age of ${maxAge} Year .`);
    
