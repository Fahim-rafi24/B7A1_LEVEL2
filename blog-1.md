# Why `any` is a Type Safety Hole — and Why `unknown` is the Safer Choice

---

## Why `any` is a Type Safety Hole

Using `any` effectively tells the compiler to **trust you**, skipping all validation for that variable. This leads to several issues.

### 🔴 Runtime Errors

You can call non-existent methods or access missing properties on an `any` variable, leading to crashes in production.

### 🔴 Contagious Usage

`any` can be assigned to other types, spreading a lack of safety throughout your codebase.

### 🔴 Loss of Tooling

IDEs cannot provide intelligent autocompletion or rename refactoring, making maintenance harder.

### 🔴 Example of a Hole

```ts
(someAnyVariable as any).foo.bar(); // Compiles, but fails if foo is undefined.
```

---

## Why `unknown` is the Safer Choice

Introduced in **TypeScript 3.0**, `unknown` is the *"responsible"* alternative to `any`. While it accepts any value (like `any`), it **restricts what you can do** with that value.

### Comparison

| | Mindset |
|---|---|
| `any` | *"I don't care what this is."* |
| `unknown` | *"I don't know what this is yet, so I will check."* |

---

> ✅ Prefer `unknown` over `any` whenever you're dealing with uncertain data — it forces you to validate before use, keeping your codebase safe and maintainable.