var numUserAge = prompt("What is your age");

if(numUserAge <= 0) {
    console.log("I'm gonna need a real age mate. Don't try to pull the wool over my eyes, yeah?");
}

else {

    if(numUserAge < 18){
        console.log("You're too young mate.");
    }
    
    else if(numUserAge < 21) {
        console.log("No drinks but go on.");
    }
    
    else if(numUserAge === 21) {
        console.log("Oh aye, well that's a free shot.");
    }
    
    else {
        console.log("You're good mate.");
    }

    if((numUserAge % 2) === 1) {
        console.log("You're an odd one.")
    }

    if(Math.sqrt(numUserAge) % 1 === 0) {
        console.log("Also: perfect square! Nice.")
    }

}


