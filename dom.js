const calculateAdd = () => {
  let number1 = document.getElementById("number1").value;//dom
  let number2 = document.getElementById("number2").value;//dom
  let result = Number(number1) + Number(number2);
  document.getElementById("resultAdd").value = result; //dom
};

const calculateEv = () => {
  let number1 = document.getElementById("number1ev").value;//dom
  let number2 = document.getElementById("number2ev").value;//dom
  let result = Number(number1) - Number(number2);
  document.getElementById("resultEv").value = result;//dom
};
