function encontrarPar(arr, target){ //Esta función también se le conoce  como TwoSum
    let left = 0;
    let right = arr.length -1;

    while(left<right){
        let result = arr[left] + arr[right];

        if(result === target){
            return [arr[left], arr[right]];
        }else if (result< target){
            left++;
        }else{
            right--;
        }
    }
    return null;
}
//Es necesario que el arreglo este ordenado para que funcione

let arr = [2,7,11,15];
let target = 9;

let result = encontrarPar(arr, target);
console.log(result);

//Esta función es útil para arreglos desordenados, su desventaja se basa en el tiempo de ejecución
function improvedTwoSum(arr,target){
    for(let i=0; i <arr.length;i++){ //Este ciclo no se ejecutará hasta que el ciclo con j recorra el arreglo
        for(let j =i+1; j<arr.length;j++){ //Este ciclo va a recorrer a cada uno de los elementos del arreglo
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

let newArr = [2,15,7,11];
let improvedResult = improvedTwoSum(newArr,target);
console.log(improvedResult);

function teast(beast, dish){
    let beastLength = beast.length;
    let dishLength = dish.length;
    if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beastLength-1) === dish.charAt(dishLength-1)){
return true;
    }else{
        return false;
    }
}

console.log(teast("Perro", "Pastel Coco"));
