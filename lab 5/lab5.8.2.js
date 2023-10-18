const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = (bill) => {
    if(bill >= 50 && bill <= 300){
        return 15/100 * bill;
    } else {
        return 20/100 * bill;
    }
} 

for (let i = 0; i < bills.length; i++){
    tips[i] = calcTip(bills[i])
    totals[i] = tips[i] + bills[i]
}

console.log(tips)
console.log(totals)


function calcAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage(totals))