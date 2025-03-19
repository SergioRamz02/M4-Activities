// Arrows Function

//Estructura tradicional
const suma = function(a,b){
    return a+b;
}
console.log(suma(3,5));

//Estructura ES6
const sum = (a,b) =>{ //Se pueden quitar las llaves, pero en ese caso solo colocamos a+b;
    return a+b;
}
console.log(sum(4,5));

const generarMensajeSaludo =(nombre) => `Hola ${nombre}`;
console.log(generarMensajeSaludo("Diego"));

const array = [1,2,3,4,5,6,7,8,9];

//Iterar con los elementos de un arreglo

array.forEach((item,index) => { //forEach regresa a cada uno de los elementos
    console.log(item +1);
})

//Map ->Es un método que funciona a partir de una función y un objeto
// Regresa a cada uno de los elementos a partir de un arreglo
const newArray = array.map((item,index) =>{
    return item + 1;
})
console.log(newArray);

newArray.forEach((item) =>{
    console.log(item);
})

/*La diferencia entre map y forEach, es que map nos regresa un nuevo arreglo
 y forEach no regresa nada*/

 //La palabra reservada void es que no regresa nada.

let nombre = "Sergio";

const miDiv = document.querySelector(".midiv");

//insertAdjacentHTML nos permite insertar estructuras en nuestro HTML

const pElements = array.map((item)=>{ //Genera un arreglo de estructura h1
    return `<h1>${item}</h1>`
})

pElements.forEach((element) =>{ //Inserta a los elementos del arreglo dentro del div
    miDiv.insertAdjacentHTML("beforeend", element);
})

//Desestructuración de objetos

const options = {
    isEnable: true,
    time: 15,
    code: "Aproved"
}
//Esto solo funciona con una sola propiedad
const {isEnable, time, code} = options;

console.log(isEnable, time, code);
