let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const computerScoreBoard = document.querySelector("#computer-score");



const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];


}

const drawGame = () => {
    msg.innerText = "Game was Draw 😝! Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice} 🤓`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreBoard.innerText = userScore;
    } else {
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice} 🤧`;
        msg.style.backgroundColor = "red";
        computerScore++;
        computerScoreBoard.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    //Generate computer choice

    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            //paper , scissors
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "rock" ? true : false;
        } else {
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }


}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    })
})