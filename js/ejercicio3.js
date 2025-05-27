// Obtener números desde input
const getNumerosEj3 = () => {
  const input = document.getElementById("inputEj3").value;
  return input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
};

const sumAndProductWithReduce = () => {
  const numeros = getNumerosEj3();
  const suma = numeros.reduce((acc, val) => acc + val, 0);
  const producto = numeros.reduce((acc, val) => acc * val, 1);
  document.getElementById("resultado3").textContent = `La suma es ${suma}. El producto es ${producto}.`;
};

const sumAndProductWithFor = () => {
  const numeros = getNumerosEj3();
  let suma = 0;
  let producto = 1;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    producto *= numeros[i];
  }
  document.getElementById("resultado3").textContent = `La suma es ${suma}. El producto es ${producto}.`;
};

const sumAndProductWithWhile = () => {
  const numeros = getNumerosEj3();
  let suma = 0;
  let producto = 1;
  let i = 0;
  while (i < numeros.length) {
    suma += numeros[i];
    producto *= numeros[i];
    i++;
  }
  document.getElementById("resultado3").textContent = `La suma es ${suma}. El producto es ${producto}.`;
};
