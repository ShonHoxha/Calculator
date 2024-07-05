

const display = document.getElementById("display");

function appendToDispaly(input){
    display.value += input;
}

function clearDispaly(){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}