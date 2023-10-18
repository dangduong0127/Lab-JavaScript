const country = 'VietNam';
const continent = 'Asian';
let population = 97470000;


let islsland = country;
let language = country;
if(language == 'VietNam'){
    language = 'VietNamese';
}
else{
    language = 'English';
}
console.log(language)

if(country == 'Australia", "Japan", "Iceland", "Indonesia", "Madagascar", "New Zealand", "Philippines", "Republic of Ireland", "United Kingdom'){
    islsland = true;
    console.log(islsland, population, country, language);
}
else{
    islsland = false;
    console.log(islsland, population, country, language);
}
// Lab 2.3 câu 1
let side = population / 2;
console.log(`Giá trị của population chia 2: ` + side);
// Lab 2.3 câu 2
if(population++){
    console.log(`Tăng giá trị của biến population thêm 1: ` + population);
}
// Lab 2.3 câu 3
const PLpopulation = 6000000;
if(population > PLpopulation){
    console.log(`Dân số của nước bạn (${population} người) nhiều hơn dân số của Phần Lan (${PLpopulation} người)`);
} else {
    console.log(`Dân số của nước bạn (${population} người) ít hơn hơn dân số của Phần Lan (${PLpopulation} người)`);
}
// Lab 2.3 câu 4
const AveragePopulation = 33000000;
if(population >= AveragePopulation){
    console.log(`Dân số nước bạn không ít hơn so với mức trung bình dân số quốc gia`);
}else {
    console.log(`Dân số nước bạn ít hơn so với mức trung bình dân số quốc gia`);
}
// Lab 2.3 câu 5
const description =  country + ' and its ' + population + ' million people speak ' + language ;
console.log(description)

// lab 2.4 
const description1 = console.log(`${country} and its ${population} million people speak ${language}`);

