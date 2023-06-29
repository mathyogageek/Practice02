var continueInput = true;

while (continueInput) {
  var score = parseInt(prompt("Enter your score (between 1 and 100):"));

  if (score >= 1 && score <= 100) {
    if (score >= 90 && score <= 100) {
      console.log("You received an A");
    } else if (score >= 80 && score < 90) {
      console.log("You received a B");
    } else if (score >= 70 && score < 80) {
      console.log("You received a C");
    } else if (score >= 60 && score < 70) {
      console.log("You received a D");
    } else {
      console.log("You received an F");
    }
  } else {
    console.log("Invalid score. Only numbers between 1 and 100 are accepted.");
  }

  var continueChoice = prompt("Do you want to continue? (Enter 'y' to continue or any other key to quit)").toLowerCase();
  continueInput = (continueChoice === "y");
}

console.log("Program ended.");

