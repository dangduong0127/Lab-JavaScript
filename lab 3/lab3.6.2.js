'use strict';
const bill = 275;
const tip1 = 0.15*bill;
const tip2 = 0.2*bill;
const tip = bill >= 50 && bill <= 300?
console.log(`The bill was ${bill}, the tip was ${tip1.toFixed(2)}, and the value ${tip1+bill}`):
console.log(`The bill was ${bill}, the tip was ${tip2.toFixed(2)}, and the value ${tip2+bill}`);

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive')




// console.log(fruitProcessor(5, 0))

// const appleOrangjuice = fruitProcessor(5, 9)
// console.log(appleOrangjuice)

// function calcAge1(BirthYear) {
//     return 2037 - BirthYear;
// }

// calcAge1(2001)
// console.log(calcAge1(2001))

// Arrow function
// const calcAge = birthday => 2037 - birthday;
// console.log(calcAge(2001))

// const yearsUntilRetirement = (birthday, firstName) => {
//     const age = 2023 - birthday;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(2001, 'Duong'))


//  function cutFruitPieces(fruit){
//     return fruit * 4;
//  }

//  function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 4));

// const calcAge = function(birthday){
//     return 2023 - birthday;
// }

// const yearsUntilRetirement = function (birthday, firstName){
//     const age = calcAge(birthday);
//     const retirement = 65 - age;
//     return retirement;
//     // return `${firstName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(2001, 'Duong'));

// const calcAverage = (d1,d2,d3) =>{
//     return (d1 + d2 + d3) / 3;
// }

// const AverageDolphins = calcAverage(85, 54, 41);
// const AverageKoalas = calcAverage(23, 34, 27);

// function checkWinner(AverageDolphins, AverageKoalas){
//     if(AverageDolphins >= AverageKoalas * 2){
//         console.log(`Dolphins win (${AverageDolphins} vs ${AverageKoalas})`)
//     } else if(AverageKoalas >= AverageDolphins * 2){
//         console.log(`Koalas win (${AverageKoalas} vs ${AverageDolphins})`)
//     } else {
//         console.log(`No team wins!`)
//     }
// }

// checkWinner(AverageDolphins,AverageKoalas)

// // Array
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends)

// friends.push('Jay')
// console.log(friends)

// friends.unshift('John')
// console.log(friends)

// friends.pop();
// console.log(friends)

const calcTip = (bill) => {
    if(bill >= 50 && bill <= 300){
        return 15/100 * bill;
    } else {
        return 20/100 * bill;
    }
} 

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(total)