function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  if (isNaN(a) || isNaN(b)) {
    return "Error: NaN encountered"; // Handle NaN values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(NaN, 5)); // Output: Error: NaN encountered