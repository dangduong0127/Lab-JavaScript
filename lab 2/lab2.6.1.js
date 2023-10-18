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
let markHigherBMI;

if(BMIMark > BMIJohn){
    markHigherBMI = true;
    console.log(markHigherBMI)
} else {
    markHigherBMI = false;
    console.log(markHigherBMI)
}

console.log(`Chỉ số BMI của Mark là: `+ BMIMark);
console.log(`Chỉ số BMI của Mark là: `+ BMIJohn);

