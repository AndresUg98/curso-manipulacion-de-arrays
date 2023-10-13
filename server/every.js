const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta2 = team.every((item) => item.age < 15);

console.log(rta2);

//Tu reto es retornar true si dentro de array de números
//todos son pares, para solucionarlo vas a encontrar una
//función llamada checkArray que recibe un parámetro de entrada:
export function checkArray(array) {
  if (array.length === 0) {
    return false;
  }
  return array.every((item) => item % 2 === 0);
}
