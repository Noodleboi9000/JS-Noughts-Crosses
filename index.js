const buttons = document.querySelectorAll(".button")
const restart = document.querySelector(".reset")
//get link to the HTML buttons

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
       let buttonVal = event.target.value
       gameInput(event.target, buttonVal)
       winnerCheck()
    })
})

restart.addEventListener("click", (event) => {
    restartGame()
})

const winningCons = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//nested array to store values of winning conditions
    
let gridSq = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X";

const gameInput = (button, buttonVal) => {
    
    if (gridSq[buttonVal] === "") {
        gridSq[buttonVal] = currentPlayer;
        button.textContent = currentPlayer;

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

//Checking if the buttonVal of gridSq is empty
//if so set the grid to current player and display with .textContent
//Checks if current player is X, if yes set to O if no set to X

const winnerCheck = () => {
    let hasWon = false

    for (let con of winningCons) {
        let one = buttons[con[0]].textContent
        let two = buttons[con[1]].textContent
        let three = buttons[con[2]].textContent
        
        if (one !== "" && two !== "" && three !== "" && one === two && two === three) {
            hasWon = true
            
            if (one === "X" && two === "X" && three === "X") {
                document.getElementsByClassName("text")[0].textContent = "Crosses win!"
                return
            }
            else if (one === "O" && two === "O" && three === "O") {
                document.getElementsByClassName("text")[0].textContent = "Noughts win!"
                return
            }
        }
    }

    if (!hasWon) {
        const allButtons = [...buttons].every((button)=> button.textContent !== "")
        if (allButtons) {
            document.getElementsByClassName("text")[0].textContent = "It's a Draw!"
        }
    }
}

//Loop through winingCons to check if a subarray is met, if so print winner

const restartGame = () => {
    gridSq = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    document.getElementsByClassName("text")[0].textContent = "Crosses go first!"
    buttons.forEach(button => { 
        button.textContent = ""
    })
}

//On restart button click reset gridSq to blank and clear winner message
