const populations = [97,1441,50,40];
const percentages = [percentageOfWorld1(97), percentageOfWorld1(1441), percentageOfWorld1(147), percentageOfWorld1(120)]
function percentageOfWorld1 (population){
    return population/7900 * 100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++){
    percentages2[i] = percentageOfWorld1(populations[i]);
}

console.log(percentages2)

