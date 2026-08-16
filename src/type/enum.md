# TypeScript — Enum

## 1. Enum

Enum ব্যবহার করা হয় কিছু **নির্দিষ্ট বা fixed related value-কে একটি নামের অধীনে রাখার জন্য।**

### Syntax

```ts
enum EnumName {
  Value1,
  Value2,
  Value3
}
```

### Example

```ts
enum Gender {
  Male,
  Female,
  Other
}

let gender: Gender = Gender.Male;
```

Defaultভাবে numeric enum-এর value `0` থেকে শুরু হয়।

```text
Male   → 0
Female → 1
Other  → 2
```

---

## 2. String Enum

Enum-এর value হিসেবে string ব্যবহার করা যায়।

### Syntax

```ts
enum EnumName {
  Value1 = "value1",
  Value2 = "value2"
}
```

### Example

```ts
enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

const gender: Gender = Gender.Male;

console.log(gender);
```

Output:

```text
male
```

---

## 3. Student Status-এর জন্য Enum

যখন কোনো property-এর value নির্দিষ্ট কয়েকটির মধ্যেই সীমাবদ্ধ থাকবে, তখন enum ব্যবহার করা যায়।

```ts
enum StudentStatus {
  Active = "active",
  Inactive = "inactive",
  Graduated = "graduated"
}

const status: StudentStatus = StudentStatus.Active;
```

এখানে শুধু এই value-গুলো ব্যবহার করা যাবে:

```text
Active
Inactive
Graduated
```

---

## 4. Interface-এর সাথে Enum

Enum এবং interface একসাথে ব্যবহার করা যায়।

```ts
enum Department {
  CSE = "CSE",
  EEE = "EEE",
  BBA = "BBA"
}

interface Student {
  name: string;
  id: number;
  department: Department;
}

const student: Student = {
  name: "Junayed",
  id: 46,
  department: Department.CSE
};
```

এখানে `department`-এর value অবশ্যই `Department` enum-এর একটি value হতে হবে।

---

## 5. Function-এর সাথে Enum

Function-এর parameter-এর type হিসেবেও enum ব্যবহার করা যায়।

```ts
enum OrderStatus {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled"
}

function checkOrderStatus(status: OrderStatus): void {
  console.log(status);
}

checkOrderStatus(OrderStatus.Shipped);
```

এখানে function শুধু `OrderStatus` enum-এর value গ্রহণ করবে।

---

## 6. কেন Enum ব্যবহার করব?

Enum ব্যবহার না করলে:

```ts
let status = "active";
```

এখানে ভুল value বা spelling দেওয়ার সম্ভাবনা থাকে:

```ts
status = "actve";
```

Enum ব্যবহার করলে:

```ts
enum Status {
  Active = "active",
  Inactive = "inactive"
}

let status: Status = Status.Active;
```

TypeScript নির্ধারিত set-এর বাইরে value ব্যবহার করলে error দেখাতে পারে।

---

## 7. Enum vs Union Type

একই ধরনের fixed value `union type` দিয়েও তৈরি করা যায়।

### Enum

```ts
enum Status {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending"
}

const status: Status = Status.Active;
```

### Union Type

```ts
type Status = "active" | "inactive" | "pending";

const status: Status = "active";
```

দুটো দিয়েই fixed set of values তৈরি করা যায়।

### প্রধান পার্থক্য

`enum` JavaScript-এ runtime-এ একটি object হিসেবে থাকে।

অন্যদিকে `union type` মূলত TypeScript-এর compile-time type checking-এর জন্য ব্যবহৃত হয় এবং JavaScript-এ আলাদা কোনো object তৈরি করে না।

---

## 8. গুরুত্বপূর্ণ কথা

Enum-কে সরাসরি `immutable object` হিসেবে মনে করা ঠিক নয়।

```ts
enum Status {
  Active = "active",
  Inactive = "inactive"
}
```

এখানে **Immutable Pattern** বলতে মূলত এমন একটি pattern বোঝানো হয় যেখানে কোনো property-এর value একটি নির্দিষ্ট set-এর মধ্যে সীমাবদ্ধ রাখা হয়।

---

## মনে রাখার মতো সংজ্ঞা

**Enum = সম্পর্কিত কিছু fixed এবং named value-কে একটি reusable set হিসেবে define করার পদ্ধতি।**

```text
Enum
 ↓
Fixed Values
 ↓
Named Values
 ↓
Type Safety
```

### সবচেয়ে সহজ Example

```ts
enum Role {
  Admin = "admin",
  User = "user",
  Moderator = "moderator"
}

const role: Role = Role.Admin;
```

এখানে `role` শুধু `Admin`, `User` অথবা `Moderator`-এর একটি value হতে পারবে।
