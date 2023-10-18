const calcAverage = (d1,d2,d3) => (d1 + d2 + d3)/3;

const AverageDolphins = calcAverage(44, 23, 71);
const AverageKoalas = calcAverage(65, 54, 49);

const AverageDolphins2 = calcAverage(85, 54, 41);
const AverageKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins!!!`);
    }
}

checkWinner(AverageDolphins, AverageKoalas);
checkWinner(AverageDolphins2, AverageKoalas2);