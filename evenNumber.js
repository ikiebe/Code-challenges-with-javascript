//this is a basic javascript function that checks whether a number is even

function evenNumber () {
    let num = 100;
    for(i=1; i<num; i++){
        if(i%2==0){
            console.log(i + " is even");
        }
    }
}

evenNumber();
