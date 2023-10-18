const arr = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(arr){
    let string = "...";
    for(let i = 0; i < arr.length; i++){
        let d;
        if(i === 0){
            d = "day ";
            string = string + ` ${arr[i]}ºC in ${i + 1} ${d}...`;
        } else {
            d = "days ";
            string = string + ` ${arr[i]}ºC in ${i + 1} ${d}...`;
        }
        
    }
    console.log(string)
}

printForecast(arr)
printForecast(arr2)

