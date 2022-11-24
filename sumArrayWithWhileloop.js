let array = [1,2,3,4,5];
let summedArray = 0;
let i = 0;

while(i<array.length){
    summedArray += array[i];
    i++;
}

console.log(summedArray);

//or

do{
    console.log(summedArray);
}   while(i<array.length);

