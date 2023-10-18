// Dữ liệu 1
const MarkMass = 78;
const MarkHeight = 1.69;
const JohnMass = 92;
const JohnHeight = 1.95;
// Dữ liệu 2
const MarkMass2 = 95;
const MarkHeight2 = 1.88;
const JohnMass2 = 85;
const JohnHeight2 = 1.76;

const BMIMark = MarkMass/(MarkHeight*MarkHeight);
const BMIJohn = JohnMass/(JohnHeight*JohnHeight);
let BMIMarkToFix = BMIMark.toFixed(1);
let BMIJohnToFix = BMIJohn.toFixed(1);
let markHigherBMI;

if(BMIMark > BMIJohn){
    markHigherBMI = true;
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI `+`(${BMIMarkToFix})` + ` is higher than John's (${BMIJohnToFix})!`);
} else {
    markHigherBMI = false;
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI `+`(${BMIJohnToFix})` + ` is higher than Mark's (${BMIMarkToFix})!`);
}


// const day = 'monday';

// switch(day){
//     case 'monday': 
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
        
// }

