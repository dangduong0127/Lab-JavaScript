function describePopulation(country, population){
    return console.log(`${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`);
}

function percentageOfWorld1 (population){
    return population/7900 * 100;
}

describePopulation('Trung Quoc',1441);
describePopulation('Phan Lan',40);
describePopulation('Viet Nam',80);