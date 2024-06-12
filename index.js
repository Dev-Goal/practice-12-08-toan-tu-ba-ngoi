// var btntatol = document.getElementById("btn1");
// btntatol.addEventListener("click", getTatol);
// function getTatol(){
//     let a = parseFloat(document.getElementById("inputa").value);
//     let b = parseFloat(document.getElementById("inputb").value);
//     let tatol = a + b;
//     if(tatol<4){
//         document.getElementById("result").innerHTML = "Result = \"Below\"";
//     }
//     else{
//         document.getElementById("result").innerHTML = "Result = \"Over\"";
//     }
// }

var btntatol = document.getElementById("btn1");
btntatol.addEventListener("click", getTatol);
function getTatol() {
  let a = parseFloat(document.getElementById("inputa").value);
  let b = parseFloat(document.getElementById("inputb").value);
  let tatol = a + b < 4 ? "Below" : "Over";
  document.getElementById("result").innerHTML = "Result = " + tatol;
}
