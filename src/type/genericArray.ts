// একই function দিয়ে different type-এর array handle করা যায়।

function getFirst<T>(items: T[]): T {
  return items[0];
}
const firstNumber = getFirst([10, 20, 30]);
const firstName = getFirst(["Rafi", "Sakib", "Junayed"]);

console.log(firstName,firstNumber);