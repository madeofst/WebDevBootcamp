var boolQuit = false;
var toDoList = [];

while(boolQuit === false) {
    var input = prompt("What would you like to do?")
    switch(input) {
        case "new":
            var newInput = prompt("Enter new item...")
            toDoList.push(newInput);
            break;
        case "list":
            console.log(toDoList);
            break;
        case "quit":
            boolQuit = true;
            break;
    }
}