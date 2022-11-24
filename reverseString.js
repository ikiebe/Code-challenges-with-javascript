const reverseString = () => {
    let string = "my name is emmanuel";

    let divide = string.split("");
    let reversed = divide.reverse();
    let finalString = reversed.join("");

    console.log(finalString);

}

reverseString();