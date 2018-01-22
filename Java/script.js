//print Reverse

var arrTest = ["Bonobos", "Thedge", "Adam Clay2000lbs", "Larry Mullin Snr's Son"];
var arrTestUni = ["Bonobos", "Bonobos", "Bonobos", "Bonobos"];
var arrNums = [1,2,3,4,5,6,7,8];
var arrNumsRand = [1,-4,38,4,22,633,7,2];
var arrNumsUni = [1,1,1,1,1,1,1,1];

function printReverse(inArr) {
    inArr.reverse();
    inArr.forEach(function(el){
        console.log(el);
    })
}

function isUniform(inArr) {
    var firstItem = inArr[0];
    var boolUni = true;
    for(i = 0; i < inArr.length; i++) {
        if(inArr[i]!== firstItem){
            // console.log("Not fine.")
            boolUni = false;
            break;
        }
    }
    return boolUni;
}

function sumArray(inArr) {
    var subTotal = 0;
    inArr.forEach(function(el){
        subTotal += el;
    })
    return subTotal;
}

function max(inArr) {
    var currMax = inArr[0];
    inArr.forEach(function(el){
        if(el > currMax){
            currMax = el;
        }
    })
    return currMax;
}