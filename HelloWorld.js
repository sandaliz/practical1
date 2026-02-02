// Basic Matching Program
function matchStrings(str1, str2) {
    return str1 === str2;
}

function matchPatterns(text, pattern) {
    return text.includes(pattern);
}

function matchNumbers(num1, num2) {
    return num1 === num2;
}

// Example usage
console.log(matchStrings("hello", "hello")); // true
console.log(matchStrings("hello", "world")); // false

console.log(matchPatterns("JavaScript is awesome", "awesome")); // true
console.log(matchPatterns("JavaScript is awesome", "python")); // false

console.log(matchNumbers(42, 42)); // true
console.log(matchNumbers(10, 20)); // false