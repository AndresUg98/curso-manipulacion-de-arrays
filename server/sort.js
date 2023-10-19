const months = ["March", "Jan", "Feb", "Dec"];
// sort muta al array original

console.log(months.sort());

const numbers = [1, 30, 4, 21, 100000];
//sort recibe 2 parametros que debe comparar.
//En el caso de numeros solo se necesitan restar para que los ordene correctamente
console.log(numbers.sort((a,b)=> a -b));

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

console.log(words.sort());

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log( orders.sort((a,b)=> b.total - a.total));