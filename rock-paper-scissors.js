function getComputerChoice() {
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const computerChoices = ["Rock", "Paper", "Scissors"];
    const rndInt = randomIntFromInterval(0, (computerChoices.length) - 1);
    const computerChoice = computerChoices[rndInt];
    console.log(computerChoice);
}

getComputerChoice();