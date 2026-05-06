// Problem 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
    const result: number[] = numbers.filter(number => number % 2 === 0);
    return result;
};
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const result1: number[] = filterEvenNumbers(numbers);
// console.log(`Result of filterEvenNumbers: ${result1}`);



// Problem 2:
const reverseString = (str: string): string => {
    const splitAll: string[] = str.split('');
    const reverseList: string[] = splitAll.reverse();
    const result: string = reverseList.join('');
    return result;
}
const result2 = reverseString('Hello, Programmer!');
// console.log(`Result of reverseString: ${result2}`);



// Problem 3:
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): "String" | "Number" => {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
};
// console.log(`Result of checkType is: ${checkType("Hello")}`);
// console.log(`Result of checkType is: ${checkType(42)}`);



// Problem 4:
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};
interface Person {
    id: number;
    name: string;
    age: number;
};
const person: Person = {
    id: 1999,
    name: "Kazi Fahim Rafi",
    age: 22
};
const userInfo: string = getProperty(person, "name");
// console.log(`Result of getProperty name is : ${userInfo}`);



// Problem 5:
interface Book {
    title: string;
    author: string;
    publishedYear: number;
};
const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
    return { ...book, isRead: true };
};
const myBook: Book = {
    title: "TypeScript Guide",
    author: "Fahim Rafi",
    publishedYear: 2026
};
const updatedBook = toggleReadStatus(myBook);
// console.log(`Result of toggleReadStatus: ${JSON.stringify(updatedBook)}`);



// Problem 6:
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
};
class Student extends Person {
    grade: number;
    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    };
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    };
};
const student1 = new Student("Fahim Rafi", 22, 95);
// console.log(`Result of getDetails: ${student1.getDetails()}`);



// Problem 7:
const getIntersection = (array1: number[], array2: number[]): number[] => {
    const set2: Set<number> = new Set(array2);
    const result: number[] = array1.filter(num => set2.has(num));
    return result;
};
const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [3, 4, 5, 6, 7];
const intersectionResult: number[] = getIntersection(array1, array2);
// console.log(`Result of getIntersection: ${intersectionResult}`);


// THE END