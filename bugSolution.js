function foo(a, b) {
  if (a === null && b === null) {
    return -1; // Or throw an error: throw new Error('Both parameters are null');
  } else if (a === null || b === null) {
    return 0;
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // -1