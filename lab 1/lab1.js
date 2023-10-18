const country = 'VietNam';
const continent = 'Asian';
const population = 97470000;

console.log(country, continent, population);

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 24789773836727
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;
//     if(passenger.passport === 24789773836727){
//         alert('Check in')
//     } else{
//         alert('Wrong passport!')
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);
// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others]= str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }
// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)

// const high5 = function(){
//     console.log('hello')
// }
 
// document.body.addEventListener('click', high5)

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greet1 = (greeting) => {
//     return name =>{
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet1('hey');


// greeterHey('Jonny Dang')

// greet1('Hello')('Duong')

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
}

lufthansa.book(239, 'Dang Duong')
lufthansa.book(2334, 'Vladimir Putin')
console.log(lufthansa.bookings)
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};

const book = lufthansa.book;
//case1
book.call(eurowings, 23, 'Abama')
book.call(lufthansa, 23, 'sukablyet')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode:'LX',
    bookings: []
}

book.call(swiss, 111, 'Mr.Dang')
//case2
const flightData = [582, 'George Copper'];
book.apply(swiss, flightData);
//case3
book.call(lufthansa, ...flightData)

//bind method
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven William')
