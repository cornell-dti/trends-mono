// Solution

// Exercise 1
type Product = { name: string; price: number; category: string };
const transformProducts = (products: Product[]): Product[] =>
    products
        .filter((product) => product.category === "electronics")
        .map((product) => ({
            name: product.name.toUpperCase(),
            price: product.price * 1.1,
            category: product.category,
        }));

// Exercise 2
type Order = { id: number; customerId: number; amount: number };
const aggregateOrders = (orders: Order[]): { [customerId: string]: number } =>
    orders.reduce((acc, order) => {
        acc[order.customerId] = (acc[order.customerId] ?? 0) + order.amount;
        return acc;
    }, {} as { [customerId: string]: number });

// Exercise 3
type Movie = { title: string; genre: string; rating: number };
const analyzeMovies = (movies: Movie[]): string[] =>
    movies
        .filter((movie) => movie.rating > 8)
        .map((movie) => `${movie.title} (${movie.genre})`);

// Exercise 4
type Person = { name: string; age: number; balance: number };
const describeFinance = (person: Person): string =>
    person.balance > 10000
        ? "wealthy"
        : person.balance >= 1000
        ? "moderate"
        : "poor";

// Exercise 5
type Params = { name: string; age: number };
const constructSentence = ({ name, age }: Params): string =>
    `Hello, my name is ${name} and I'm ${age} years old.`;

// Exercise 6
type Student = { name: string; grade: number };
const categorizeStudents = (
    students: Student[]
): { [grade: string]: Student[] } =>
    students.reduce((acc, student) => {
        const grade =
            student.grade >= 90
                ? "A"
                : student.grade >= 80
                ? "B"
                : student.grade >= 70
                ? "C"
                : student.grade >= 60
                ? "D"
                : "F";
        acc[grade] = [...(acc[grade] || []), student];
        return acc;
    }, {} as { [grade: string]: Student[] });

// Exercise 7
type NestedObject = { level1?: { level2?: { level3?: { value?: string } } } };
const handleNestedObject = (obj: NestedObject): string =>
    obj.level1?.level2?.level3?.value ?? "Not available";

// End of solution.

export {
    transformProducts,
    aggregateOrders,
    analyzeMovies,
    describeFinance,
    constructSentence,
    categorizeStudents,
    handleNestedObject,
};
