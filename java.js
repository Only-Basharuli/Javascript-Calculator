// ეს ფუნქცია შლის ყველაფერს
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// ეს ფუნქცია აჩვენებს მნიშვნელობებს
function display(value) {
    document.getElementById("result").value += value;
}
 
// ეს ფუნქცია აფასებს გამონათქვამს და აბრუნებს შედეგს
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}