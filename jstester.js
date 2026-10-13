var answer = Number(prompt('Total bill for your meal?:'));
console.log(answer);
while (answer == 0 || answer < 0 || isNaN(answer)) {
if (answer == 0){
    var answer = Number(prompt('Please enter a bill amount greater than zero.'));
}

else if (answer < 0){
    var answer = Number(prompt('Negative amounts are not allowed. Please enter a valid bill amount.'));
}

else if (isNaN(answer)){
    var answer = Number(prompt('Invalid input. Please enter a numeric bill amount.'));

}
}
let tally = (answer/10);

console.log(`For a bill of $${answer.toFixed(2)}, the tip should be $${tally.toFixed(2)}.`);
document.write(`For a bill of $${answer.toFixed(2)}, the tip should be $${tally.toFixed(2)}.`);