let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const scoreUser = document.querySelector("#user-score");
const scoreComp = document.querySelector("#comp-score");
const generateCompChoice = () => {
  // rock, paper, scissors
  let options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerHTML = "Game was draw.Play again!";
  msg.style.backgroundColor = "#0a223f";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    scoreUser.innerHTML = userScore;
    msg.innerHTML = "You WON !!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    scoreComp.innerHTML = compScore;
    msg.innerHTML = "You Lost.!!";
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("User choice =", userChoice);

  // Generate computer choice
  const compChoice = generateCompChoice();
  console.log("Computer choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , sccisors
      userWin = compChoice === "rock" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userID = choice.getAttribute("id");
    playGame(userID);
  });
});
