const pets = ['cat','dog','bat'];

const rta = pets.includes("dog")

console.log(rta);


// Tu reto es retornar un array solo con las 
// palabras que cumplan con la condición de tener 
// un término de búsqueda dado.
function filterByTerm(array, term) {
    return array.filter(name => name.includes(term))
}