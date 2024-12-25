# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates a potential bug in a JavaScript function that handles null values. The function `foo` is designed to return 0 if either of its input parameters is null. However, it does not explicitly handle the case where both parameters are null, potentially leading to unexpected behavior.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version of the function.

## Bug Description

The function might seem to work correctly for many scenarios. But consider the case where both input parameters (`a` and `b`) are null. The current function returns 0, which is correct according to the intended logic. However, if the function's behavior for null inputs were to change (e.g., due to future enhancements or refactoring), this implicit handling could lead to errors.  A more explicit check enhances code maintainability and readability.

## Solution

The solution involves explicitly checking if both parameters are null and handling this case explicitly. This makes the function's behavior more predictable and robust.