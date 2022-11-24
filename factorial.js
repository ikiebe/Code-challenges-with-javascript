//program to print factorial of any number

//let input = parseInt(prompt("enter a number here"));

let printFactorial = (input) => {
    let factorial = 1;
    
    for(i=input; i>=1; i--){
        factorial*=i;
    }
    return factorial;
}

console.log(printFactorial(5));