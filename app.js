let userScore =0 ;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div  =document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p' ,'s'];
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

function converToWord(letter){
    switch(letter){
        case 'r' : return 'Rock';
        case 'p': return 'Paper';
        case 's': return 'Scissors';
    }
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${converToWord(user)} ${smallUserWord}  beats ${converToWord(computer)} ${smallCompWord} . You Win!`;
    document.getElementById(user).classList.add('green_glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('green_glow');
    } , 300);
}

function lose(user, computer) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${converToWord(user)} ${smallUserWord}  loses to ${converToWord(computer)} ${smallCompWord} . You Lost!`;
    document.getElementById(user).classList.add('red_glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('red_glow');
    }, 300);
}
function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${converToWord(user)} ${smallUserWord} equals ${converToWord(computer)} ${smallCompWord}. DRAW!`;
    document.getElementById(user).classList.add('gray_glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('gray_glow');
    }, 300);
}

function game(userChoice) {
    
    const computerChoice = getComputerChoice();

    switch(userChoice+computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,computerChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }

    
}

function main() {

rock_div.addEventListener('click' ,function() {

    game("r");
    
})

paper_div.addEventListener('click', function () {

    game("p");
})

scissors_div.addEventListener('click', function () {

    game("s");
})

}

main();