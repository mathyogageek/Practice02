// Prompt the user to start the game
var startGame = prompt("Are you ready to play the game? (yes/no)");

if (startGame.toLowerCase() === "yes") {
  // Display the initial scenario
  alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry, and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");

  // Prompt the user to choose a direction
  var direction = prompt("Which direction would you like to head? (forward, left, or right)");

  // Evaluate the chosen direction
  switch (direction.toLowerCase()) {
    case "left":
      alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
      break;
    case "forward":
      alert("You walk 100 yards and safely make your way out of the cave.");
      break;
    case "right":
      alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
      break;
    default:
      alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
  }

  // Prompt the user to rate the game
  var rating = parseInt(prompt("Rate the game between 1 and 10"));

  if (isNaN(rating) || rating < 1 || rating > 10) {
    alert("Thank you for playing!");
  } else if (rating >= 6 && rating <= 10) {
    alert("Thank you for playing! Play again sometime.");
  } else {
    alert("Thank you for playing! We are working hard to improve the game.");
  }
} else {
  alert("Thank you for considering. Play again sometime.");
}
