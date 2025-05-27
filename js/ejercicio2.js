// Obtener números desde input
const getNumerosInput = () => {
  const input = document.getElementById("inputEj2").value;
  return input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
};

const doubleWithMap = () => {
  const numeros = getNumerosInput();
  const resultado = numeros.map(num => num * 2);
  document.getElementById("resultado2").textContent = `[ ${resultado.join(", ")} ]`;
};

const doubleWithFor = () => {
  const numeros = getNumerosInput();
  const resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * 2);
  }
  document.getElementById("resultado2").textContent = `[ ${resultado.join(", ")} ]`;
};

const doubleWithWhile = () => {
  const numeros = getNumerosInput();
  const resultado = [];
  let i = 0;
  while (i < numeros.length) {
    resultado.push(numeros[i] * 2);
    i++;
  }
  document.getElementById("resultado2").textContent = `[ ${resultado.join(", ")} ]`;
};

