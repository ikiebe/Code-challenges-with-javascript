let numbers = [1,2,3,-4,-2,-1,-7,-8,9,0,-2];
let negativeNumbers = [];

for(let i = 0; i<numbers.length; i++ ){
    if(numbers[i]<0){
        negativeNumbers+=numbers[i];     
        //console.log(numbers[i]);
    }
}
console.log(negativeNumbers);