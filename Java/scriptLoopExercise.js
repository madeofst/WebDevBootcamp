//Is Even

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }

    else {
        return false;
    }
}

function isEvenRefactored(num) {
    return num % 2 === 0;
}

// Factorial
function factorial(num) {
    if(num <= 0) {
        return 1;
    }

    else {
        for(i = (num-1);i>0;i--) {
            num = num*i;
        }
        return num;
    }
}

function factorialRefactored(num){
    var result = 1;
    for(var i = 2;i <= num; i++){
        result *= i;
    }
    return result;
}


//Replace
function kebabToSnake(str) {
    if(typeof str !== "string") {
        console.log("not a valid string brah")
    }

    else {
        var re = /-/g;
        return str.replace(re,"_")
    }
}