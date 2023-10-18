'use strict';
const poll = {
    question: "What is your favorite programming language? ",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    numberOfVotes: new Array(4).fill(0),
    registerNewAnswer: function(){
        let answer = Number(prompt(`${this.question}\n${this.options.join(" \n")}\n\n(Write option number)`));
    
        if(!isNaN(answer) && answer >= 0 && answer <= 3){
            this.numberOfVotes[answer]++;
        } else {
            alert("Câu trả lời không hợp lệ")
        }
    },
    displayResults(type = "array"){
        if(type === "string"){
            console.log(`Poll results are ${this.numberOfVotes.join(", ")}`)
        } else {
            console.log(this.numberOfVotes)
        }
    }
}
const btn_answer = document.querySelector(".btn-answer")
btn_answer.addEventListener('click', function(){
    poll.registerNewAnswer();
    poll.displayResults();
})

const DataTest1 = {
    numberOfVotes: [5, 2, 3]
}

const DataTest2 = {
    numberOfVotes: [1, 5, 3, 9, 6, 1]
}

console.log("----- Data type test -----")
poll.displayResults.call(DataTest1)
poll.displayResults.call(DataTest1, "string")
poll.displayResults.call(DataTest2)
poll.displayResults.call(DataTest2, "string")
console.log("----- Number of votes result -----")