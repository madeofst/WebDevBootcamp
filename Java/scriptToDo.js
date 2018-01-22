var boolQuit = false;
var toDoList = [];

while(boolQuit === false) {
    var input = prompt("What would you like to do?")
    switch(input) {
        case "new":
            newToDo();
            break;
        case "list":
            listToDos();
            break;
        case "delete":
            deleteToDo();
            break;
        case "quit":
            boolQuit = true;
            break;
    }
}

function newToDo() {
    var newInput = prompt("Enter new item...")
    toDoList.push(newInput);
    console.log("ToDo item added.")
}

function listToDos() {
    console.log("**********");
    toDoList.forEach(function(toDoItem, i){
        console.log(i + ": " + toDoItem);
    })
    console.log("**********");
}

function deleteToDo() {
    var delIndex = prompt("Enter index to be deleted...")
    toDoList.splice(delIndex,1);
    console.log("ToDo item deleted.")
}