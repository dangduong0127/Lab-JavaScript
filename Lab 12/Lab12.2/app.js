Data1 = [5, 2, 4, 1, 15, 8, 3];
Data2 = [16, 6, 10, 5, 6, 1, 4];

let humanAge = [];
const calcAverageHumanAge = (age) => {
  age.forEach((array) => {
    let cal;
    if (array <= 2) {
      cal = array * 2;
      humanAge.push(cal);
    } else if (array > 2) {
      cal = 16 + array * 4;
      humanAge.push(cal);
    }
  });

  for (let i = 0; i < humanAge.length; i++) {
    if (humanAge[i] < 18) {
      humanAge.splice(i, 1);
    }
  }

  let sum = humanAge.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(sum / humanAge.length);
  //   console.log(humanAge);
};

calcAverageHumanAge(Data1);
calcAverageHumanAge(Data2);
