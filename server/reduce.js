const totals = [1,2,3,4];

//El primer atributo es el que acumula, en el que estara el resultado final
//el segundo atributo el el elemento o item que se esta iterando

//El primer parametro como tal seria toda la arrow function
//El segundo parametro seria el estado inicial de este caso 'sum'

const rta = totals.reduce((sum,item)=> sum + item,0);

console.log(rta);