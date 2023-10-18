function percentageOfWorld1 (population){
    return population/7900 * 100;
}
console.log(`Dan so Trung Quoc la: ` + percentageOfWorld1(1441).toFixed(1))
console.log(`Dan so Viet Nam la: ` + percentageOfWorld1(97).toFixed(1))
console.log(`Dan so Nhat Ban la: ` + percentageOfWorld1(125).toFixed(1))

const percentageOfWorld2 = () => {
    console.log(`Dan so Trung Quoc la: ` + percentageOfWorld1(1441).toFixed(1))
    console.log(`Dan so Viet Nam la: ` + percentageOfWorld1(97).toFixed(1))
    console.log(`Dan so Nhat Ban la: ` + percentageOfWorld1(125).toFixed(1))
}

percentageOfWorld2()

const percentageOfWorld3 = population => population/7900 * 100;