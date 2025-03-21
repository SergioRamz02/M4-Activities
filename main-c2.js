//Repaso de Arrays

const numbers = [9,3,5,6,7,2];

console.log(numbers);

//Ordenar el contenido de un arreglo
numbers.sort();
console.log(numbers);

/* Otra forma de ordenar 
const bubbleSort = (array) =>{
    const arr = Array.from(array);
    for (let i =0; i< array.length; i++){
        for(let j =0; j<array.length-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort(numbers));*/

const bubbleSort = array => {
    for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
        }
    }
    }
    return numbers;
};
console.log(bubbleSort(numbers)); 

//Copias de arreglos
const copyOfNumbers = Array.from(numbers);

console.log(copyOfNumbers);

//ECMAScript
const newArreglo = [...numbers];
console.log(newArreglo);

// Declaración con let

let nombres = ["Diego", "Ana", "Lalo"];
console.log(nombres);

// Cambiando el contenido de un arreglo con let
nombres = [true, false, true, false];
console.log(nombres);

//Recorriendo el arreglo con for
for(let i=0; i< nombres.length;i++){
    console.log(nombres[i]);
}

//Con for of
for(let nombre of nombres){
    console.log(nombre);
}
// Objetos, métodos y funciones
const persona ={
    nombre: "Sergio",
    edad: 27,
    saludar: ()=>{
        console.log("Hola");
    },
}
console.log(persona);

const clavesObjetos = Object.keys(persona); //Object es una función asociada a objetos

console.log(clavesObjetos);

// Crear una copia de un objeto
const miObjeto = Object.create(persona);
console.log(miObjeto);
miObjeto.saludar();

//Métodos básicos

const frutas = ["Manzana", "Uva", "Limón"];

frutas.shift(); //Elimina el elemento 0.

frutas.unshift("Fresa");

frutas.pop(); //Elimina el último elemento.

frutas.push("Sandía");

console.log(frutas, frutas.length);

//Nuevos Métodos

// find() ->Encuentra el primer elemento que cumpla con una condición.
const miFruta = frutas.find((element) => element === "Uva");
console.log(miFruta);

// map() ->Cambia los elementos de un arreglo
 const numbers2 = [1,2,3,6,8];

 const doubles = numbers2.map((item, index)=> {
    const doubleNumber = item*2;
    console.log(`El número ${item} en el indice: ${index} al multiplicar por dos es: ${doubleNumber}`);
    return doubleNumber;
 });
console.log(doubles);

// filter() ->Crea un nuevo arreglo con todos los elementos que cumplan una condición
const filterNumbers = numbers2.filter((element) => element > 5);

console.log(filterNumbers);

// forEach() ->Realiza una función sobre los elementos del arreglo sin crear un nuevo arreglo

// sort() ->Ordena los elementos de un arreglo de una manera específicada.