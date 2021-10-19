//Implement a function called pinCodeGenerator. This function should take one argument called length and return a randomly generated pin code of a given length. 

//For example,  pinCodeGenerator(5) → 73473

function pinCodeGenerator(a){
    const pin = Math.round (Math.random() * Math.pow(10, a)); 
    console.log(pin);
    return pin;
}


pinCodeGenerator(5);
pinCodeGenerator(2);
pinCodeGenerator(3);