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


//Contar por rangos
//Cuantos valores hay de 1 - 5
//Cuantos valores hay de 6 - 8
//Cuantos valores hay de 9 - 10
const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result)







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


