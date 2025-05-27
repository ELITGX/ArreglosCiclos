let arr = ["This", "is", "a", "sentence."];

const printOutString = () => {
  const resultado = arr.join(" ");
  document.getElementById("resultado1").textContent = resultado;
};


const printWithForLoop = () => {
  let resultado = "";
  for (let i = 0; i < arr.length; i++) {
    resultado += arr[i];
    if (i < arr.length - 1) {
      resultado += " ";
    }
  }
  document.getElementById("resultado1").textContent = resultado;
};
