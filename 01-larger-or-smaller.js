// Call the function after the page has finished loading
// automatically after the page loads
// Practice02Rie
window.onload = compareIntegers;

// Wrap the code inside a function
function compareIntegers() {
  // Prompt for two integers
  var x = parseInt(prompt("Enter the first integer:"));
  var y = parseInt(prompt("Enter the second integer:"));

  // Compare the two numbers
  var result;
  if (x > y) {
    result = x;
  } else if (y > x) {
    result = y;
  } else {
    result = "The two numbers are equal.";
  }

  // Display the result in the browser window
  document.body.innerHTML = "<h1>" + result + "</h1>";

  
}

