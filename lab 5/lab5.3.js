const myCountry = {
    country: 'VietNam',
    capital: 'HaNoi',
    language: 'Vietnamese',
    population: 97,
    neighbours: ['Lao', 'Capuchin', 'Thailand'],
    describe: function(){
        return console.log(`${this.country} has ${this.population} million finnish-peaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function() {
       this.isIsland = this.neighbours.length === 0 ? true: false;

}
}

myCountry.describe();
console.log(myCountry.checkIsland())
console.log(myCountry)