const calculateAdd = () => {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let result = Number(number1) + Number(number2);
  document.getElementById("resultAdd").value = result;
};
calculateAdd();

const calculateEv = () => {
  let number1 = document.getElementById("number1ev").value;
  let number2 = document.getElementById("number2ev").value;
  let result = Number(number1) - Number(number2);
  document.getElementById("resultEv").value = result;
};
calculateEv();
