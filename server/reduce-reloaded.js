const items = [1, 3, 2, 3];

//El estado inicial en este caso sera un objeto en vacio
const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }

  return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

//Saber cuantas personas tienen el nivel

const rta2 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }

    return obj;
  }, {});

console.log(rta2);

//Contar por rangos
//Cuantos valores hay de 1 - 5
//Cuantos valores hay de 6 - 8
//Cuantos valores hay de 9 - 10
const items2 = [1, 3, 2, 3];
const rta3 = items2
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }

    return obj;
  }, {});

console.log(rta3);
