# How `Generics` Maintain Strict Typing

---

## Compile-Time Verification

Unlike using a "catch-all" type like `Object` or `any`, generics provide **compile-time type checking**. The compiler ensures that if you pass a list of integers into a generic function, you only receive integers back, preventing `ClassCastExceptions` or other runtime errors.

## Type Inference

In many languages like **TypeScript** or **Java**, the compiler can automatically *"infer"* the type based on the arguments you pass in, maintaining strict types without requiring you to manually re-declare them every time.

## Preserving Relationships

Generics capture the **relationship between inputs and outputs**. For instance, a generic identity function:

```ts
identity<T>(arg: T): T
```

...explicitly tells the compiler that the return type will be **exactly the same** as the input type, which is impossible with standard broad types.

## Generic Constraints

You can restrict which types are allowed by using **constraints**:

```ts
<T extends Number>
```

This ensures the reusable component only works with data structures that possess specific properties or methods, such as a `.length` property.

---

## Common Use Cases

### 📦 Collections

Creating a single `List<T>` class that can hold any type — be it strings, integers, or custom objects — while ensuring that only elements of that specific type can be added or retrieved.

```ts
const names: List<string> = new List();
const scores: List<number> = new List();
```

### 🌐 API Responses

Defining a standard `ApiResponse<T>` interface where the `data` field changes based on the specific endpoint being called, yet remains strictly typed for the rest of your application.

```ts
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
```

### 🛠️ Utility Functions

Writing a single sorting or filtering function that works across various array types without losing information about what is inside those arrays.

```ts
function filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}
```

---

> ✅ Generics let you write **flexible, reusable code** without sacrificing the type safety that makes TypeScript powerful — the best of both worlds.