const myArray = [1, 2, 3, 4, 5];

console.log("Tiene el 1: " + myArray.includes(1));
console.log("Tiene el 0: " + myArray.includes(0));
console.log(
  "Empezando por la posicion 1, tiene el 2?: " + myArray.includes(2, 1)
);
console.log(
  "Empezando por la posicion 2, tiene el 1?: " + myArray.includes(1, 2)
);

const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];

console.log(newArray.includes({ id: 2 }));

const o1 = { id: 1 };
const o2 = { id: 2 };
const o3 = { id: 3 };

const ultArray = [o1, o2, o3];

console.log(ultArray.includes(o1));
