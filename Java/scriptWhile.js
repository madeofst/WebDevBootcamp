var numStart = -10
var numEnd = 19

console.log("Numbers between -10 and 19")
var num = numStart
while(num <= numEnd) {
    console.log(num)
    num++
}

var numStart = 10
var numEnd = 40

console.log("Even numbers between 10 and 40")
var num = numStart
if(numStart % 2 !== 0) {
    num++
}
while(num <= numEnd) {
    console.log(num)
    num+=2
}

var numStart = 300
var numEnd = 333

console.log("Odd numbers between 300 and 333")
var num = numStart
if(numStart % 2 === 0) {
    num++
}
while(num <= numEnd) {
    console.log(num)
    num+=2
}

var numStart = 5
var numEnd = 50

console.log("All numbers divisble by 5 and 3 between 5 and 50")
var num = numStart
while(num <= numEnd) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log(num)
    }
    num++
}