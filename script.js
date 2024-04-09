let userScore=0;
let cpuScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara=document.querySelector("#userScore");
const cpuScorePara=document.querySelector("#cpuScore");


const genComputerChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const rndmIdx=Math.floor(Math.random()*3);
    return options[rndmIdx];

}

drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor="grey";
};

const showWinner=(userWin, userChoice, cpuChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win");
        msg.innerText=`You Win! ${userChoice} beats ${cpuChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        cpuScore++;
        cpuScorePara.innerText=cpuScore;
        console.log("You Lose");
        msg.innerText=`You Lose! ${cpuChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{
    console.log("user choice=", userChoice);
    const cpuChoice=genComputerChoice();
    console.log("cpu choice=", cpuChoice);


    if(userChoice===cpuChoice){
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=cpuChoice==="paper"?false: true;
        }
        else if(userChoice==="paper"){
            userWin=cpuChoice==="scissors"?false:true;

        }
        else{
        userWin=cpuChoice ==="rock"? false:true;
    }
    showWinner(userWin, userChoice, cpuChoice);
}
};

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id"); 
        playGame(userChoice);

    });
});