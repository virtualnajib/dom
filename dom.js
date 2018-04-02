const calculateAdd = () => {
  let number1 = document.getElementById("number1").value;//dom
  let number2 = document.getElementById("number2").value;//dom
  let result = Number(number1) + Number(number2);
  document.getElementById("resultAdd").value = result; //dom
};

const calculateRd = () => {
  let number1 = document.getElementById("number1rd").value;//dom
  let number2 = document.getElementById("number2rd").value;//dom
  let result = Number(number1) - Number(number2);
  document.getElementById("resultRd").value = result;//dom
};
