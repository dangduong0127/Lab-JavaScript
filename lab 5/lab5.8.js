const MarkMiller = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.mass/(this.height * this.height)
    }
};

const JohnSmith = {
    fullname: 'john Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass/(this.height * this.height)
    }
};

if(MarkMiller.calcBMI() > JohnSmith.calcBMI()){
    console.log(`${MarkMiller.fullname} BMI (${MarkMiller.calcBMI().toFixed(1)}) is higher than ${JohnSmith.fullname} (${JohnSmith.calcBMI().toFixed(1)})`)
} else {
    console.log(`${JohnSmith.fullname} BMI (${JohnSmith.calcBMI().toFixed(1)}) is higher than ${MarkMiller.fullname} (${MarkMiller.calcBMI().toFixed(1)})`)
}