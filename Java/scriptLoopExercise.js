//Is Even

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }

    else {
        return false;
    }
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