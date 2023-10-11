const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta = orders.map(item => item.total)
console.log(rta);

//Añadiendo un nuevo atributo a cada uno de los objetos.
//map muto al array original, ya que genera una copia mutable
//esto cambia la referencia en memoria (es algo malo)
const rta2 = orders.map(item => {
  item.tax = .19;
  return item
})
console.log(rta2);


//añadimos un nuevo atributo creando un nuevo objeto
//copiamos todo el objeto anterior con el spread operator (...)
// y lo mandamos a otro objeto y ahora si con map podemos añadir un
//nuevo atrubuto sin necesidad de modificar el original
const rta3 = orders.map(item => {
  item.tax = .19;
  return {
    ...item,  
    tax: .19
  }
});
console.log(rta3);

// Tu reto es agregar y calcular una nueva propiedad llamada 
// "taxes", los impuestos deben ser del 19% con base al precio 
// base y debes tener en cuenta que como resultado se debe dejar
//  un valor entero, sin decimales.

function addNewAttr(array) {
  return array.map((item) => {
    const copyItem = {...item};
    copyItem.taxes = Math.trunc(copyItem.price * 0.19)
    return copyItem;
  });
}