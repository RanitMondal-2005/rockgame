// PLAY WITH COMPUTER MODE

let compScore=0;
let userScore=0;

const choices=document.querySelectorAll(".img-class");
const result_msg=document.querySelector("#result");
const genComputerChoice=()=>{
    // Computer Will Generate randomly out of Roc/paper/scissor, so store them in an array
    let options=["rock","paper","scissors"];
    /* 
        Since we have Random func in JS,same as Python ,we will use that.
        By default, random will always generate no.s in btw range of 0-1,
        But here need the nos in btw 0-2 ,since we have 3 elements for choice, 
        for that just multiply math.random() with 3,and make it floor, then it will give no.s  btw 0-2 without decimals,
        we will use the array index as it is a no,and random will give us a no, so we can easily compare or choose randomly.
    */
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx]
}

const drawGame=()=>{
    console.log("Match Draw");
    result_msg.classList.remove("win", "lose");
    result_msg.classList.add("draw");
    result_msg.innerText = "It's a draw. Try again.";
}

const showWinner=(userWin)=>{
    result_msg.classList.remove("win", "lose", "draw");
    if(userWin===true){
        console.log("User Wins");
        result_msg.classList.add("win");
        result_msg.innerText = "Nice move! You take this round.";
    }
    else{
        console.log("Computer Wins");
        result_msg.classList.add("lose");
        result_msg.innerText = "Good try. Computer wins this round.";
    }
}

const playGame=(userChoice)=>{
    // Get User choice i.e our choiceID from our function of ForEach Loop
    console.log(userChoice,"= User Choice");  // Print the user choice in console

    // Get Computer Choice
    const compChoice=genComputerChoice();
    console.log(compChoice,"= Computer Choice");  // Print the computer choice in console

    let userWin=true; // initially consider user WINS
    if(userChoice===compChoice){
            drawGame();
            return;
    }
    else{
           
           if (userChoice==="rock"){
            // Computer has 2 choice : paper or scissor
            // if computer choose paper, then user loses against paper else user wins against scissor
            userWin=compChoice==="paper"?false:true;
           }
           else if(userChoice==="paper"){
            // Computer has 2 choice : rock or scissor
            // if computer chooses scissor, then user loses against scissor else user wins against rock
            userWin=compChoice==="scissors"?false:true;
           }
           else{
            // Now user is choosing Scissor,
            // Computer has 2 choices: paper or rock
            // if computer chooses rock,then user loses against rock else user wins against paper
            userWin=compChoice==="rock"?false:true;
           }
    }
    showWinner(userWin);


}

choices.forEach((ch) =>  {
    ch.addEventListener("click",()=>{
        const userChoice=ch.getAttribute("id");
        playGame(userChoice);
    });
});