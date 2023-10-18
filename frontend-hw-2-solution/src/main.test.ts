import { expect, test } from "vitest";
import {
    transformProducts,
    aggregateOrders,
    analyzeMovies,
    describeFinance,
    constructSentence,
    categorizeStudents,
    handleNestedObject,
} from "./main.ts";

// Exercise 1 Tests
test("transformProducts should handle empty array", () => {
    expect(transformProducts([])).toEqual([]);
});

test("transformProducts should transform and filter products", () => {
    expect(
        transformProducts([
            { name: "laptop", price: 1000, category: "electronics" },
            { name: "shirt", price: 20, category: "clothing" },
        ])
    ).toEqual([{ name: "LAPTOP", price: 1100, category: "electronics" }]);
});

test("transformProducts should handle products with all the same category", () => {
    expect(
        transformProducts([
            { name: "phone", price: 500, category: "electronics" },
            { name: "tablet", price: 300, category: "electronics" },
        ])
    ).toEqual([
        { name: "PHONE", price: 550, category: "electronics" },
        { name: "TABLET", price: 330, category: "electronics" },
    ]);
});

// Exercise 2 Tests
test("aggregateOrders should handle empty array", () => {
    expect(aggregateOrders([])).toEqual({});
});

test("aggregateOrders should aggregate orders by customerId", () => {
    expect(
        aggregateOrders([
            { id: 1, customerId: 123, amount: 100 },
            { id: 2, customerId: 123, amount: 50 },
            { id: 3, customerId: 456, amount: 200 },
        ])
    ).toEqual({ "123": 150, "456": 200 });
});

test("aggregateOrders should handle orders with all the same customerId", () => {
    expect(
        aggregateOrders([
            { id: 1, customerId: 123, amount: 100 },
            { id: 2, customerId: 123, amount: 100 },
            { id: 3, customerId: 123, amount: 100 },
        ])
    ).toEqual({ "123": 300 });
});

// Exercise 3 Tests
test("analyzeMovies should handle empty array", () => {
    expect(analyzeMovies([])).toEqual([]);
});

test("analyzeMovies should filter and format movies", () => {
    expect(
        analyzeMovies([
            { title: "Inception", genre: "Action", rating: 9 },
            { title: "Toy Story", genre: "Animation", rating: 8.5 },
            { title: "The Room", genre: "Drama", rating: 3 },
        ])
    ).toEqual(["Inception (Action)", "Toy Story (Animation)"]);
});

test("analyzeMovies should handle movies with all low ratings", () => {
    expect(
        analyzeMovies([
            { title: "Movie1", genre: "Action", rating: 5 },
            { title: "Movie2", genre: "Drama", rating: 4 },
        ])
    ).toEqual([]);
});

// Exercise 4 Tests
test("describeFinance should handle wealthy", () => {
    expect(describeFinance({ name: "John", age: 30, balance: 20000 })).toEqual(
        "wealthy"
    );
});

test("describeFinance should handle moderate", () => {
    expect(describeFinance({ name: "Mary", age: 25, balance: 5000 })).toEqual(
        "moderate"
    );
});

test("describeFinance should handle poor", () => {
    expect(describeFinance({ name: "James", age: 40, balance: 500 })).toEqual(
        "poor"
    );
});

// Exercise 5 Tests
test("constructSentence should construct the sentence correctly", () => {
    expect(constructSentence({ name: "Alice", age: 25 })).toEqual(
        "Hello, my name is Alice and I'm 25 years old."
    );
});

// Edge case
test("constructSentence should handle special characters in the name", () => {
    expect(constructSentence({ name: "A&lice", age: 25 })).toEqual(
        "Hello, my name is A&lice and I'm 25 years old."
    );
});

// Exercise 6 Tests
test("categorizeStudents should categorize students correctly", () => {
    expect(
        categorizeStudents([
            { name: "Student1", grade: 95 },
            { name: "Student2", grade: 85 },
            { name: "Student3", grade: 75 },
            { name: "Student4", grade: 65 },
            { name: "Student5", grade: 55 },
        ])
    ).toEqual({
        A: [{ name: "Student1", grade: 95 }],
        B: [{ name: "Student2", grade: 85 }],
        C: [{ name: "Student3", grade: 75 }],
        D: [{ name: "Student4", grade: 65 }],
        F: [{ name: "Student5", grade: 55 }],
    });
});

test("categorizeStudents should handle empty array", () => {
    expect(categorizeStudents([])).toEqual({});
});

// Exercise 7 Tests
test("handleNestedObject should return the nested value", () => {
    expect(
        handleNestedObject({
            level1: { level2: { level3: { value: "Success" } } },
        })
    ).toEqual("Success");
});

test('handleNestedObject should return "Not available" if value is missing', () => {
    expect(handleNestedObject({ level1: { level2: { level3: {} } } })).toEqual(
        "Not available"
    );
});

test("handleNestedObject should handle completely empty object", () => {
    expect(handleNestedObject({})).toEqual("Not available");
});
