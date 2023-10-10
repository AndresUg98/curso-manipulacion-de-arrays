const letters = ['a','b','c'];

//Usando .map para crear un nuevo array con la transformacion
const newArray=letters.map(item=> item + '++')

console.log(letters);
console.log(newArray);

// reto Tienes un array de números, tu reto es 
// retornar los números de ese array multiplicados por dos.

function multiplyElements(array) {
    return array.map(item => item * 2);
  }
 multiplyElements([2, 4, 5, 6, 8])