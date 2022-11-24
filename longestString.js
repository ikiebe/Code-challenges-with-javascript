let array = ['emma', 'micheal', 'marvelous', 'aboy'];

for(let i = 0; i<array.length; i++){
    for(char in array[i]){
        if(char>0){
            console.log('the longest string is ' +char)
        }
    }

}



/*let string = "emma";

for(char in string){
    if(char>=0){
        console.log(string[char]);
    }
}
*/