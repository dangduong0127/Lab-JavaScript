function calcTip(bills){
    if(bills >= 50 && bills <= 300){
        return 15/100 * bills;
    } else {
        return 20/100 * bills;
    }
}

const bills = [125, 555, 44];
const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]

console.log(total)


// const Jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Perter', 'Steven'],
//     hasDriversLicense: false,
//     calcAge: function(){
//         this.calcAge = 2037 - this.birthYear;
//         return this.calcAge;
//     }
// };


// // console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`);
 
// function getSummary(){
//     if(Jonas.hasDriversLicense == true){
//         console.log(`${Jonas.firstName} is a ${Jonas.calcAge()}-year old teacher, and he has a driver's license`);
//     } else {
//         console.log(`${Jonas.firstName} is a ${Jonas.calcAge()}-year old teacher, and he has no driver's license`);
//     }
// }

// getSummary()

// const Jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Perter', 'Steven'],
//     true
// ];

// for(let i = Jonas.length - 1; i >= 0; i--){
//     console.log(i, Jonas[i])
// }

// for(let excercise = 1; excercise < 4 ; excercise++){
//     console.log(`--------- Starting excercise ${excercise}`)

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

