import {
    sumOfArray,
    filterEvenNumbers,
    reverseString,
    convertToCelsius,
    findDuplicates,
    highestProfitOpportunity,
    isPalindrome,
    transposeMatrix,
    isPrime,
    fibonacci,
} from "./main";
import { expect, test } from "vitest";

// Test for QUESTION 1: Sum of Array
test("sum of array [1, 2, 3, 4, 5] is 15", () => {
    expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
});
test("sum of an empty array is 0", () => {
    expect(sumOfArray([])).toBe(0);
});
test("sum of array with negative numbers [-3, 3, -2, 2] is 0", () => {
    expect(sumOfArray([-3, 3, -2, 2])).toBe(0);
});

// Test for QUESTION 2: Filter Even Numbers
test("filter even numbers from [1, 2, 3, 4, 5] results in [2, 4]", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
});
test("filter even numbers from empty array results in empty array", () => {
    expect(filterEvenNumbers([])).toEqual([]);
});
test("filter even numbers from all odd numbers [1, 3, 5, 7] results in empty array", () => {
    expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
});

// Test for QUESTION 3: String Reversal
test('reverse string "JavaScript" results in "tpircSavaJ"', () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
});
test('reverse string "" results in "" (empty string)', () => {
    expect(reverseString("")).toBe("");
});
test('reverse string with spaces "ab c" results in "c ba"', () => {
    expect(reverseString("ab c")).toBe("c ba");
});

// Test for QUESTION 4: Temperature Converter
test("32 Fahrenheit is 0 Celsius", () => {
    expect(convertToCelsius(32)).toBe(0);
});
test("0 Fahrenheit is approximately -17.78 Celsius", () => {
    expect(convertToCelsius(0)).toBeCloseTo(-17.78, 2);
});
test("212 Fahrenheit is 100 Celsius", () => {
    expect(convertToCelsius(212)).toBe(100);
});

// Test for QUESTION 5: Find Duplicate Characters
test('duplicate characters in "programming" are ["g", "m", "r"]', () => {
    expect(findDuplicates("programming")).toEqual(["g", "m", "r"]);
});
test('no duplicate characters in "abcdef"', () => {
    expect(findDuplicates("abcdef")).toEqual([]);
});
test('duplicate characters in "aabbcc" are ["a", "b", "c"]', () => {
    expect(findDuplicates("aabbcc")).toEqual(["a", "b", "c"]);
});

// Test for QUESTION 6: Highest Profit Opportunity
test("buy at 1 and sell at 6 in [3, 1, 4, 6, 5]", () => {
    expect(highestProfitOpportunity([3, 1, 4, 6, 5])).toEqual({
        buyIndex: 1,
        sellIndex: 3,
    });
});
test("no profit opportunity in descending order [6, 5, 4, 3]", () => {
    expect(highestProfitOpportunity([6, 5, 4, 3])).toEqual({
        buyIndex: -1,
        sellIndex: -1,
    });
});
test("multiple profit opportunities, pick the highest in [1, 2, 3, 4]", () => {
    expect(highestProfitOpportunity([1, 2, 3, 4])).toEqual({
        buyIndex: 0,
        sellIndex: 3,
    });
});

// Test for QUESTION 7: Palindrome Checker
test('"racecar" is a palindrome', () => {
    expect(isPalindrome("racecar")).toBe(true);
});
test('"trends" is not a palindrome', () => {
    expect(isPalindrome("trends")).toBe(false);
});
test('a single character "a" is a palindrome', () => {
    expect(isPalindrome("a")).toBe(true);
});

// Test for QUESTION 9: Prime Number Checker
test("7 is prime", () => {
    expect(isPrime(7)).toBe(true);
});
test("4 is not prime", () => {
    expect(isPrime(4)).toBe(false);
});
test("2 is prime", () => {
    expect(isPrime(2)).toBe(true);
});

// Test for QUESTION 10: Fibonacci Sequence
test("5th number in Fibonacci sequence is 5", () => {
    expect(fibonacci(5)).toBe(5);
});
test("1st number in Fibonacci sequence is 1", () => {
    expect(fibonacci(1)).toBe(1);
});
test("10th number in Fibonacci sequence is 55", () => {
    expect(fibonacci(10)).toBe(55);
});
