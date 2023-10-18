const myCountry = {
    country: 'VietNam',
    capital: 'HaNoi',
    language: 'Vietnamese',
    population: 97,
    neighbours: ['Lao', 'Capuchin', 'Thailand']
};

console.log(`${myCountry.country} has ${myCountry.population} million finish-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}.`)

const increasePopulation = myCountry.population + 2 ;
console.log(`Population after increase: ` + increasePopulation + ` million`)

const decreasepopulation = myCountry['population'] - 2 ;
console.log(`Popuilation after decrease: `+ decreasepopulation + ` million`)