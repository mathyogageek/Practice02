function playCoinFlip() {
    var coinFlip = Math.random(); // Generate a random number between 0 and 1
    var choice = prompt("Select Heads or Tails:").toLowerCase();
  
    if (coinFlip < 0.5) {
      // Coin flip result is heads
      if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
      } else if (choice === "tails") {
        alert("The flip was heads but you chose tails...you lose!");
      } else {
        alert("Invalid choice. Please select Heads or Tails.");
      }
    } else {
      // Coin flip result is tails
      if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
      } else if (choice === "tails") {
        alert("The flip was tails and you chose tails...you win!");
      } else {
        alert("Invalid choice. Please select Heads or Tails.");
      }
    }
  }
  
  window.onload = playCoinFlip;
  

