//Velocidad contra distancia
const zeroFuel = (distanceToPump, mpg, fuelleft) =>{
    let velocity = distanceToPump/fuelleft;

    if(velocity<=mpg){
        return true;
    }else{
        return false
    }
}

console.log(zeroFuel(50,25,2));

//Invertir palabras
function solution(str){
    let newStr = "";

    for(let i = str.length-1; i >=0 ; i--){
        newStr += str[i];
    }
return newStr;
}

const wordReverse = solution("casa");
console.log(wordReverse);

//Invertir Palabras con two pointers
const revertWord = (word) => {
    let arr = word.split('');
    let start = 0;
    let end = arr.length - 1;
    for (start; start < end; start++){
        let aux = arr[start];
        arr[start] = arr[end];
        arr[end] = aux;
        end--;
    }
    return arr.join('');
}