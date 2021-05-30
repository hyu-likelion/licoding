const input = document.querySelector("input")

function send(data){
    input.value += data
}

function calculate(){
    let result = eval(input.value);
    input.value=result;

}

function reset(){
    input.value="";
}
