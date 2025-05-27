let originalArray = [3, 6, 12, 5, 100, 1];

// Bubble Sort puro
const ordenarBubble = () => {
  let arr = [...originalArray]; // copia para no modificar el original
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambio
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  document.getElementById("resultado6").textContent = `Ordenado: [${arr.join(", ")}]`;
};

// Mostrar pasos del bubble sort (opcional)
const mostrarPasos = () => {
  let arr = [...originalArray];
  let n = arr.length;
  let resultado = `Pasos del bubble sort:\n\n`;

  for (let i = 0; i < n - 1; i++) {
    resultado += `Iteración ${i + 1}:\n`;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      resultado += `[${arr.join(", ")}]\n`;
    }
    resultado += "\n";
  }

  document.getElementById("resultado6").textContent = resultado.trim();
};
