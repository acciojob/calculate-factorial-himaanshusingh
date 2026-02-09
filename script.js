//your JS code here. If required.
const value = parseInt(prompt("Enter a number to find the factorial"));

function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

alert(`The factorial of ${value} is ${fact(value)}`);