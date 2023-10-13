const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["lovely"] },
  { userId: 3, username: "Niko", attributes: ["Nice", "Cool"] },
];

const rta = users.map((user) => user.attributes).flat();

console.log("map y flap", rta);

const rta2 = users.flatMap((user) => user.attributes);

console.log("flatmap ", rta2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};
//convertir objeto a array
//con Object entramos a los diferentes objetos y con el values pedirmos solamente los valores que tengan esos objetos.
const rta3 = Object.values(calendars).flatMap((item) => {
  return item.map((date) => date.startDate);
});
console.log(rta3);

const reto = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

const NumberOfWords = reto.flatMap((item) => {
  return item.split(" ");
}).length;

console.log(NumberOfWords);
