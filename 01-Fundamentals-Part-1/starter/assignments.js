/////////// Values and Variables ///////////
const country = "USA"
const continent = "North America"
let popUSA = 300000000

// console.log(country, continent, popUSA)



/////////// Data Types ///////////
const isIsland = false
let language
console.log(isIsland, popUSA, country, language)



/////////// let, const, var ///////////
language = "English"
console.log(isIsland, popUSA, country, language)

popUSA = 310

console.log(isIsland, popUSA, country, language)

/////////// Basic Operators ///////////
let halfPop = popUSA/2
console.log(halfPop)

popUSA = 400

console.log(halfPop)

popFinland = 600
if (popFinland < popUSA) {
    console.log("Finland has a lower population than my country.")
    } else {
        console.log("Finland has a higher population than my country.")
    }

let description = 'Portugal is in Europe, and its 11 million people speak portuguese'


/////////// Strings and Template Literals ///////////
countryName3 = "Portugal"
portugalContinent = "Europe"
portugalPopulationInMillions = 11
portugalLanguage = "Portuguese"


description = `${countryName3} is in ${portugalContinent}, and its ${portugalPopulationInMillions} million people speak ${portugalLanguage}`

console.log(description)

/////////// Taking Decisions: if / else Statements ///////////

function aboveAverage(country, population) {
    
    if (population > 33) {
        populationDifferenceHigh = population - 33
        console.log(`${country}'s population is ${populationDifferenceHigh} million ABOVE average.`)
    } else if (population === 33) {
        console.log(`${country}'s population is EXACTLY average.`)
    } else {
        populationDifferenceLow = 33 - population
        console.log(`${country}'s population is ${populationDifferenceLow} million is BELOW average.`)
    }
}

aboveAverage(countryName3, portugalPopulationInMillions)


/////////// Type Conversion and Coercion ///////////
console.log('9' - '5');
console.log('19' - '13' + '17') 
console.log('19' - '13' + 17);
console.log('57' < 123);
console.log(5 + 6 + '4' + 9 - 4 - 2)