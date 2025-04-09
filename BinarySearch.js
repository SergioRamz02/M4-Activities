// Busqueda Binaria -> Consiste en encontrar un objetivo dentro de un arreglo ordenado.

const binarySearch = (array, target, low, high) =>{
    
    if(low > high){ //El caso base, detiene la recursión
        return -1; //El elemento no se encuentra en el arreglo
    }

    let mid = Math.floor((low + high) / 2); //Inicia la busqueda desde la mitad el tamaño del arreglo.
    
    if(array[mid] === target){
        return mid;
    } else if(array[mid] > target){ //Si se cumple nos desplazamos a la izquierda
        return binarySearch(array, target, low, mid - 1);
    }else{ // En caso contrario, nos desplazamos a la derecha
        return binarySearch(array, target, mid + 1, high);
    }
}

const myArray = [1,3,5,7,9,11,13,15,17,19,21];

let foundTarget = binarySearch(myArray, 21, 0, myArray.length-1);

console.log(foundTarget);
