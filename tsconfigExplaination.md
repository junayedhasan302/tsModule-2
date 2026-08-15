# TypeScript `tsconfig.json` সহজ ব্যাখ্যা

`tsconfig.json` হলো TypeScript project-এর configuration file। এখানে TypeScript compiler-কে বলা হয়—code কীভাবে check করবে এবং JavaScript-এ কীভাবে convert করবে।

## 1. `compilerOptions`

```json
"compilerOptions": {
  ...
}
```

এটার ভিতরে TypeScript compiler-এর সব settings থাকে।

**সহজভাবে:**
`compilerOptions` = TypeScript compiler-কে দেওয়া instructions।

## 2. File Layout

```json
// "rootDir": "./src",
// "outDir": "./dist",
```

এগুলো এখন `//` দিয়ে comment করা, তাই কাজ করছে না।

### `rootDir`

```json
"rootDir": "./src"
```

TypeScript-এর মূল source code কোথায় আছে সেটা বলে।

```text
project/
├── src/
│   ├── index.ts
│   └── user.ts
└── tsconfig.json
```

এখানে:

```json
"rootDir": "./src"
```

মানে TypeScript source files `src` folder-এর মধ্যে।

### `outDir`

```json
"outDir": "./dist"
```

Compile করার পরে generated JavaScript files কোথায় যাবে সেটা বলে।

```text
src/index.ts
      ↓
     tsc
      ↓
dist/index.js
```

সাধারণ project-এ:

```json
"rootDir": "./src",
"outDir": "./dist"
```

## 3. `module`

```json
"module": "nodenext"
```

এটা বলে TypeScript-এর module system কীভাবে কাজ করবে।

Module বলতে মূলত:

```ts
import ...
export ...
```

যেমন:

```ts
import { add } from "./math";
```

এবং:

```ts
export function add(a: number, b: number) {
  return a + b;
}
```

`nodenext` Node.js-এর modern module behavior-এর সাথে TypeScript-কে মিলিয়ে কাজ করায়।

**মনে রাখো:**
`module` = `import/export` কীভাবে handle হবে।

## 4. `target`

```json
"target": "esnext"
```

এটা বলে TypeScript compile করার পরে JavaScript কোন version-এর syntax ব্যবহার করবে।

`ESNext` মানে current/latest JavaScript features-এর দিকে target করা।

Example:

```ts
const user: string = "Junayed";
```

Compile হলে:

```js
const user = "Junayed";
```

TypeScript-এর type চলে যাবে, কিন্তু JavaScript syntax থাকবে।

**মনে রাখো:**
`target` = কোন JavaScript version-এর জন্য code তৈরি হবে।

## 5. `types`

```json
"types": []
```

এটা বলে কোন global type definitions automatically include করতে হবে।

Node.js project হলে:

```json
"types": ["node"]
```

এবং:

```bash
npm install -D @types/node
```

এরপর Node
