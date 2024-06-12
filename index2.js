var check = document.getElementById("btn1");
check.addEventListener("click", getCheck);
function getCheck() {
  let text = document.getElementById("txt1").value;
  let login =
    text == "Employee"
      ? "Hello"
      : text == "Director"
      ? "Greeting"
      : text == ""
      ? "No login"
      : "Again";

  alert(login);
}
