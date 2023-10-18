const country = prompt('Nhập tên quốc gia bạn muốn tìm');
const population = parseInt(prompt('Nhập dân số')) ;
const userinput = prompt('Có phải quốc đảo không (Nhập giá trị true hoặc false))');
const island = Boolean(userinput.toLowerCase() === "true");
const language = prompt('Ngôn ngữ quốc gia').toLowerCase();

if(population > 50 && language == 'english' && island == false){
    console.log(`You should live in ${country} :)` );
} else {
    console.log(`${country} does not meet your criteria`);
}