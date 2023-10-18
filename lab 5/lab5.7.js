const percentageOfWorld3 = population => population/7900 * 100;
const percentages = [percentageOfWorld3(97), percentageOfWorld3(1441), percentageOfWorld3(147), percentageOfWorld3(120)];
const populations = [97,1441,147,120];

const percentages2 = [];
let i = 0;
while(i < populations.length){
    percentages2[i] = percentageOfWorld3(populations[i]);
    i++;
}
console.log(percentages2)
console.log(percentages)
