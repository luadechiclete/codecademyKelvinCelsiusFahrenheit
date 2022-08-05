//Difinimos o valor de Kelvin
const kelvin = 0;
//Definimos o valor de Celsius
const celsius = kelvin - 273;
//calcula o valor de Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//arredondamos o valor de fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature ${fahrenheit} degress Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degress newton`);
