function clearScreen(){
        document.getElementById("result").value="";
}
function display(value){
        document.getElementById("result").value+=value;
}
function evaluation() {
        let a= document.getElementById("result").value;
        let b= eval(a)
        document.getElementById("result").value = b;
}