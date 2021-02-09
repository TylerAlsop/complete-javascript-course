////////////// Challenge 1 //////////////

let marksWeight = 78
let marksHeight = 1.69

let johnsWeight = 92
let johnsHeight = 1.95

let marksBMI = marksWeight / (marksHeight ** 2)
console.log('Marks Weight 1:', marksWeight)
console.log('Marks Height 1:', marksHeight)
console.log('Marks BMI 1:', marksBMI)


let johnsBMI = johnsWeight / (johnsHeight ** 2)
console.log('Johns Weight 1:', johnsWeight)
console.log('Johns Height 1:', johnsHeight)
console.log('Johns BMI 1:', johnsBMI)

let markHigherBMI = marksBMI > johnsBMI
console.log("Marks BMI is higher than Johns 1:", markHigherBMI)

marksWeight = 95
marksHeight = 1.95

johnsWeight = 85
johnsHeight = 1.76

marksBMI = marksWeight / (marksHeight ** 2)
johnsBMI = johnsWeight / (johnsHeight ** 2)

console.log('Marks Weight 2:', marksWeight)
console.log('Marks Height 2:', marksHeight)
console.log('Marks BMI 2:', marksBMI)

console.log('Johns Weight 2:', johnsWeight)
console.log('Johns Height 2:', johnsHeight)
console.log('Johns BMI 2:', johnsBMI)


markHigherBMI = marksBMI > johnsBMI
console.log("Marks BMI is higher than Johns 2:", markHigherBMI)


////////////// Challenge 2 //////////////

if (markHigherBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnsBMI}).`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's BMI (${marksBMI}).`)
}


////////////// Challenge 3 //////////////
let dolphinsGame1 = 88
let dolphinsGame2 = 97
let dolphinsGame3 = 106
let dolphinsAverage = (dolphinsGame1 + dolphinsGame2 + dolphinsGame3) / 3

let koalasGame1 = 56
let koalasGame2 = 104
let koalasGame3 = 99
let koalasAverage = (koalasGame1 + koalasGame2 + koalasGame3) / 3

console.log(`Dolphins average: ${dolphinsAverage}`)
console.log(`Koalas average: ${koalasAverage}`)


if (dolphinsAverage === koalasAverage && (dolphinsAverage >= 100) && (koalasAverage >= 100)){
    console.log(`It's a tie of ${dolphinsAverage} to ${koalasAverage}!`)
} else if (dolphinsAverage > koalasAverage && (dolphinsAverage >= 100)){
    console.log(`The Dolphins win ${dolphinsAverage} to ${koalasAverage}!`)
} else if (koalasAverage > dolphinsAverage && (koalasAverage >= 100)) {
    console.log(`The Koalas win ${koalasAverage} to ${dolphinsAverage}!`)
} else {
    console.log(`Neither team scored over 100 points and so no one gets the trophy!`)
}


////////////// Challenge 4 //////////////

let bill = 275

const tip = bill < 50 || bill > 300 ? bill * 0.2 : bill * 0.15

let total = bill + tip

console.log(`Original Bill: $${bill}. Tip: $${tip}. Total Cost: $${total}.`)