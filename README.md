# 🚀 TypeScript — Batch 7 Assignment 1 (Level 2)

> **Hands-on TypeScript problems & in-depth blog posts** covering core concepts like type guards, generics, union types, and OOP — all in one place.

---

## 📋 Table of Contents

- Overview
- Tech Stack
- Project Structure
- Problem Solutions
- Blog Posts
- How to Run
- Author

---

## 🔎 Overview

This repository contains solutions and blog write-ups for **Assignment 1 — Level 2** of the Batch 7 web development course. The assignment is designed to strengthen understanding of TypeScript fundamentals through practical coding challenges and conceptual writing.

---

## 🛠️ Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| **TypeScript** | Core language for all solutions |
| **Node.js**    | Runtime environment             |
| **Markdown**   | Blog posts                      |

---

## 📂 Project Structure

```
B7A1_LEVEL2/
├── solutions.ts    # All 7 problem solutions
├── blog-1.md       # Blog: any vs unknown
├── blog-3.md       # Blog: Generics & strict typing
└── README.md       # You are here!
```

---

## ✅ Problem Solutions

All solutions are in [`solutions.ts`](./solutions.ts). Here's a quick summary:

| #   | Problem                           | Key Concept                             |
| --- | --------------------------------- | --------------------------------------- |
| 1   | **Filter Even Numbers**           | `Array.filter()`, type annotations      |
| 2   | **Reverse a String**              | `split`, `reverse`, `join`              |
| 3   | **Check Type (String or Number)** | Union types, `typeof` type guard        |
| 4   | **Get Object Property**           | Generics with `keyof` constraint        |
| 5   | **Toggle Read Status**            | Interface extension, intersection types |
| 6   | **Student Class**                 | OOP — inheritance, `super()`, methods   |
| 7   | **Array Intersection**            | `Set` for O(n) lookup, `Array.filter()` |

### 💡 Highlights

- **Problem 4** demonstrates advanced generics using `<T, K extends keyof T>` to build a fully type-safe property accessor.
- **Problem 6** showcases classical OOP with `class` inheritance and the `super` keyword.
- **Problem 7** uses a `Set` for efficient intersection — a common interview pattern.

---

## 📝 Blog Posts

### Blog 1 — [Why `any` is a Type Safety Hole & Why `unknown` is Safer](./blog-1.md)

Explores the dangers of using `any` in TypeScript — runtime errors, contagious type erosion, and loss of IDE tooling — and contrasts it with `unknown`, which enforces validation before use.

### Blog 3 — [How Generics Maintain Strict Typing](./blog-3.md)

A deep dive into how generics provide compile-time verification, type inference, and constrained flexibility. Includes practical use cases like typed collections, API response interfaces, and utility functions.

---

## ⚡ How to Run

1. **Clone the repository**

   ```bash
   git clone https://github.com/Fahim-rafi24/B7A1_LEVEL2.git
   ```

2. **Install TypeScript** (if not already installed)

   ```bash
   npm install -g typescript
   ```

3. **Compile & run**

   ```bash
   tsc solutions.ts
   node solutions.js
   ```

   > 💡 Uncomment the `console.log` lines inside `solutions.ts` to see the output for each problem.

---

## 👤 Author

**Kazi Fahim Rafi**

- 🎓 Batch 7 — Level 2 Programming Hero
- 🔗 GitHub: [@Fahim-rafi24](https://github.com/Fahim-rafi24)

---

<p align="center">
  <sub>⭐ If you found this helpful, consider giving the repo a star!</sub>
</p>
