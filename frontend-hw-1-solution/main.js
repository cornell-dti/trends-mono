// EXAMPLE SOLUTION

// QUESTION 1: Sum of Array
function sumOfArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// QUESTION 2: Filter Even Numbers
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}

// QUESTION 3: String Reversal
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

// QUESTION 4: Temperature Converter
function convertToFahrenheit(celsius) {
    return (celsius - 32) * (5 / 9);
}

// QUESTION 5: Find Duplicate Characters
function findDuplicates(inputString) {
    const charCount = {};
    const duplicates = [];
    inputString.split("").forEach((char) => {
        charCount[char] = (charCount[char] || 0) + 1;
    });
    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }
    return duplicates;
}

// QUESTION 6: Highest Profit Opportunity
function highestProfitOpportunity(prices) {
    let buyIndex = -1;
    let sellIndex = -1;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > maxProfit) {
                buyIndex = i;
                sellIndex = j;
                maxProfit = prices[j] - prices[i];
            }
        }
    }

    return { buyIndex, sellIndex };
}

// QUESTION 7: Palindrome Checker
function isPalindrome(inputString) {
    const cleanString = inputString.replace(/\s+/g, "");
    return cleanString === cleanString.split("").reverse().join("");
}

// QUESTION 9: Prime Number Checker
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

// QUESTION 10: Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    let previous = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    return current;
}

// Exports for testing
module.exports = {
    sumOfArray,
    filterEvenNumbers,
    reverseString,
    convertToFahrenheit,
    findDuplicates,
    highestProfitOpportunity,
    isPalindrome,
    isPrime,
    fibonacci,
};
