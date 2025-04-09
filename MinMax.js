//Valor mínimo y máximo de un arreglo

function minMax(array, startIndex, lastIndex){

    if(startIndex === lastIndex){
        return [array[startIndex], array[startIndex]];
    }

    if((lastIndex - startIndex) === 1){
        if(array[startIndex] > array[lastIndex]){
            return [array[lastIndex], array[startIndex]];
        }else{
            return [array[startIndex], array[lastIndex]];
        }
    }
    else{
        let mid = Math.floor((startIndex + lastIndex) / 2);

        let [leftMin, leftMax] = minMax(array, startIndex, mid);
        let [rightMin,rightMax] = minMax(array, mid + 1, lastIndex);

        return [Math.min(leftMin,rightMin), Math.max(leftMax,rightMax)];

    }
}

const array = [1,3,5,7,9,11,13,15,17,19,21];

console.log(minMax(array,0, array.length - 1));
