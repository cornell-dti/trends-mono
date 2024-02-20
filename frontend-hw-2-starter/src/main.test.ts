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
test("transformProducts should transform and filter products", () => {
    expect(
        transformProducts([
            { name: "laptop", price: 1000, category: "electronics" },
            { name: "shirt", price: 20, category: "clothing" },
        ])
    ).toEqual([{ name: "LAPTOP", price: 1100, category: "electronics" }]);
});

// Exercise 2 Tests
test("aggregateOrders should aggregate orders by customerId", () => {
    expect(
        aggregateOrders([
            { id: 1, customerId: 123, amount: 100 },
            { id: 2, customerId: 123, amount: 50 },
            { id: 3, customerId: 456, amount: 200 },
        ])
    ).toEqual({ "123": 150, "456": 200 });
});

// Exercise 3 Tests
test("analyzeMovies should filter and format movies", () => {
    expect(
        analyzeMovies([
            { title: "Inception", genre: "Action", rating: 9 },
            { title: "Toy Story", genre: "Animation", rating: 8.5 },
            { title: "The Room", genre: "Drama", rating: 3 },
        ])
    ).toEqual(["Inception (Action)", "Toy Story (Animation)"]);
});

// Exercise 4 Tests
test("describeFinance should handle wealthy", () => {
    expect(describeFinance({ name: "John", age: 30, balance: 20000 })).toEqual(
        "wealthy"
    );
});

// Exercise 5 Tests
test("constructSentence should construct the sentence correctly", () => {
    expect(constructSentence({ name: "Alice", age: 25 })).toEqual(
        "Hello, my name is Alice and I'm 25 years old."
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

// Exercise 7 Tests
test("handleNestedObject should return the nested value", () => {
    expect(
        handleNestedObject({
            level1: { level2: { level3: { value: "Success" } } },
        })
    ).toEqual("Success");
});
