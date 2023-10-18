const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]

for(let i = 0; i < listOfNeighbours.length ; i++){
    for(let rep = 1;rep < listOfNeighbours[i].length; rep++){
        console.log(listOfNeighbours[i][rep]);
    }
    
}