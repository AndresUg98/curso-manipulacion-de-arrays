const words = ["spray",'limit', 'elite','exuberant'];

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
    {
        customerName: "Nicolas",
        total: 240,
        delivered: false,
      },
  ];
//Filtrando si delivered es true y el total es mayor o igual a 100
  const rta3 = orders.filter(item => item.delivered && item.total >=100);

  console.log(rta3);


  //Buscador de nombres

  const search = (query) =>{
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
  }

  console.log(search('Nic'));


//   Tienes un array de strings que contienen diferentes 
//   palabras, tu reto es retornar un array solo con las que 
//   cumplan con la condición de tener 4 o más letras.

  function filterByLength(array) {
    const search = array.filter(item => item.length >= 4)
    
    return console.log(search); 

  }

  filterByLength(['rosa', 'gol', 'pez', 'día', 'gafas'])