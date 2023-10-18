const neighbours = ['Lao', 'Capuchin', 'Thailand'];
console.log(neighbours)

neighbours.push('Utopia')
console.log(neighbours)

neighbours.pop()
console.log(neighbours)

if(neighbours.includes('Germany') == false){
    console.log(`Probably not a central European country :D`);
}

console.log(neighbours.indexOf('Capuchin'))
if(neighbours.indexOf('Capuchin') == true){
    neighbours[1] = 'Republic of Capuchin'
    console.log(neighbours)
}
