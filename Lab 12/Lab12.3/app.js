Data1 = [5, 2, 4, 1, 15, 8, 3];
Data2 = [16, 6, 10, 5, 6, 1, 4];

// let humanAge = [];
function calcAverageHumanAge(ages) {
  return ages
    .map((age) => (age <= 2 ? 2 * age : 4 * age + 16))
    .filter((age) => age >= 18)
    .reduce((age, ageNext) => age + ageNext, 0);
  ages
    .map((age) => (age <= 2 ? 2 * age : 4 * age + 16))
    .filter((age) => age >= 18).length;
}

console.log(calcAverageHumanAge(Data1));
console.log(calcAverageHumanAge(Data2));
