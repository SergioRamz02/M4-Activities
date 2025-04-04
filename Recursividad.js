//Factorial

function Factorial(n){

    if(n < 1){
        return 1;
    }

    return n*Factorial(n-1);
}

let totalFactorial = Factorial(7);
console.log(totalFactorial);
