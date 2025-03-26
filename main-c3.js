//Métodos con arreglos

//reduce() ->Reduce un arreglo a un solo valor.
const letras =["h","o","l","a"];

let palabra = letras.reduce((palabra, letra) => palabra + letra);
console.log(palabra); //Imprime la palabra hola, ya que se concatenan los valores

let palabraFor = "";
for(let i = 0; i < letras.length; i++){
palabraFor += letras[i];
}
console.log(palabraFor);

//every() ->Comprueba que todos los elementos del arreglo cumplan una condición
const tareas =[
    {
        nombre: "Lavar trastes",
        pendiente: true
    },
    {
        nombre: "Hacer tarea",
        pendiente: true
    },
    {
        nombre:"Limpiar cuarto",
        pendiente: true
    },
    {
        nombre: "Estudiar JS",
        pendiente: true
    },
];

let todasLasTareasSonPendientes = tareas.every((tarea) => tarea.pendiente === true);//Regresa un valor booleano
console.log(todasLasTareasSonPendientes);

//Similar del método every(), a partir de un ciclo for
let elementoInicial = tareas[0].pendiente;
let resultado = true;

for(let i=0; i< tareas.length;i++){
    if(elementoInicial !== tareas[i].pendiente){
resultado = false;
    }
    elementoInicial = tareas[i].pendiente;
}
console.log(resultado);

//Similar del método every(), mediante una función
function verificarAtributo(array, key) {
    let elementoInicial = array[0][key];
    let resultado = true;
    
    for(let i=0; i< array.length;i++){
        if(elementoInicial !== array[i][key]){
    resultado = false;
        }
        elementoInicial = array[i][key];
    }
    return true;
}
console.log(verificarAtributo(tareas, "pendiente"));

const productos =[
    {
        nombre: "Plátano",
        Precio: 20
    },
    {
        nombre: "Plátano",
        Precio: 20
    },
    {
        nombre: "Plátano",
        Precio: 20
    },
    {
        nombre: "Plátano",
        Precio: 20
    },
];
console.log(verificarAtributo(productos, "precio"));
console.log(verificarAtributo(productos,"nombre"));

/*Método every() con estructuras div
const divs =[];
const tdosImagen = divs.every((div) =>div.firstChild === HTMLImageElement);*/

//includes() ->Verifica si hay un elemento en el arreglo
//includes() no funciona con objetos y arreglos de arreglos
const incluyeLetra = letras.includes("o");
console.log(incluyeLetra);

//some() ->Comprueba si al menos un elemento cumple una condición
const unaTareaNoCumplida = tareas.some((tarea) => tarea.pendiente === false);
console.log(unaTareaNoCumplida);

//Objetos
const carritoCompras ={
    productos: [],
    agregarProductos: function(producto){
        this.productos.push(producto.toLowerCase());
    },
    eliminarProducto: function(producto){
        let indiceDelProducto = this.productos.indexOf(producto.toLowerCase()); //indexOf ->Regresa un -1 si no se encuentra el elemento
        if(indiceDelProducto === -1){
            console.log(`No se encontro ningun producto con el nombre ${producto}`);
        return;
        }
        this.productos.splice(indiceDelProducto,1);
    },
    mostrarProductos: function(){
        this.productos.forEach((producto)=> console.log(producto));
    }
};

carritoCompras.agregarProductos("Fresas");
carritoCompras.agregarProductos("Manzana");
carritoCompras.agregarProductos("Kiwi");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("Kiwi");
carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("Plátano");
