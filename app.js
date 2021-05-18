let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") {return "Rock";}
    else
    if(letter === "p") {return "Paper";}
    else
    {return "Scissors";}
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore;   
    result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You won!";
    scoreBoard_div.classList.add('green-glow');
    setTimeout(function () {scoreBoard_div.classList.remove('green-glow')}, 300);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computer)  + " beats " + convertToWord(user) + ". You lost!";
    scoreBoard_div.classList.add('red-glow');
    setTimeout(function () {scoreBoard_div.classList.remove('red-glow')}, 300);



}

function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computer)  + " versus " + convertToWord(user) + ". It's a draw!";

}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) { 
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
            

        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;

            

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            break;

            

    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");

    });

    paper_div.addEventListener('click', function() {
        game("p");

    });

    scissors_div.addEventListener('click', function() {
        game("s");
    });
}

main();