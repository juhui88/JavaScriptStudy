const generateNum = document.querySelector("#generate_num");
const userNum = document.querySelector("#user_num");
const result = document.querySelector("#result");
const winLoseResult = document.querySelector("#win_lose_result");
const play = document.querySelector("button");

function handleButton(e) {
    e.preventDefault();
    const generateNumValue = parseInt(generateNum.value);
    const userNumValue = parseInt(userNum.value);
    const randNum = Math.floor(Math.random() * generateNumValue);
    
    if(isNaN(generateNumValue)|| isNaN(userNumValue)) {
        alert("please input number");
        return
    }

    if ( userNumValue > generateNumValue) {
        console.log(generateNumValue);
        console.log(userNumValue);
        alert(`please input number less than ${generateNumValue}`);
        return
    }

    result.innerText = `You chose :${userNumValue}, the machine chose:${randNum}.`;
    
    if (userNumValue == randNum){
        winLoseResult.innerText = "You win!";
    } else {
        winLoseResult.innerText = "You lost!"
    }
}

play.addEventListener("click", handleButton);
