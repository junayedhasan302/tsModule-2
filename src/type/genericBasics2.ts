// TypeScript নিজেও Type বুঝতে পারে
// প্রতিবার <string> বা <number> লিখতে হয় না।

function identity<T>(value: T): T {
  return value;
}

const name = identity("Junayed");
const id = identity(46);
const active = identity(true);