const dogJulia_data1 = [3, 5, 2, 12, 7];
const dogKate_data1 = [4, 1, 15, 8, 3];
const dogJulia_data2 = [9, 16, 6, 8, 3];
const dogKate_data2 = [10, 5, 6, 1, 4];

const checkDogs = (Julia, Kate) => {
  let dogJuliaCP = Julia.slice();
  dogJuliaCP.unshift();
  dogJuliaCP.shift();
  const Julia_Kate = [...dogJuliaCP, ...Kate];
  Julia_Kate.forEach(function (array, index) {
    if (array >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${array} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy`);
    }
  });
};
checkDogs(dogJulia_data1, dogKate_data1);
