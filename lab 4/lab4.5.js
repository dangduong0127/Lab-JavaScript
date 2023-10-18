const populations = ['VietNam','China','Japan','Canada'];

console.log(populations)
console.log(populations.includes('VietNam','China','Japan','Canada'))

const percentages = [percentageOfWorld1(97), percentageOfWorld1(1441), percentageOfWorld1(147), percentageOfWorld1(120)]

function percentageOfWorld1 (population){
    return population/7900 * 100;
}

console.log(percentages)