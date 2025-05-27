let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Mostrar lista actual
const mostrarPersonas = () => {
  document.getElementById("resultado5").textContent = `Personas: [${people.join(", ")}]`;
};

// Eliminar "Dani"
const removerDani = () => {
  const index = people.indexOf("Dani");
  if (index !== -1) {
    people.splice(index, 1);
  }
  mostrarPersonas();
};

// Eliminar "Juan"
const removerJuan = () => {
  const index = people.indexOf("Juan");
  if (index !== -1) {
    people.splice(index, 1);
  }
  mostrarPersonas();
};

// Mover "Luis" al frente
const moverLuisAlFrente = () => {
  const index = people.indexOf("Luis");
  if (index !== -1) {
    const [luis] = people.splice(index, 1);
    people.unshift(luis);
  }
  mostrarPersonas();
};

// Agregar tu nombre al final
const agregarMiNombre = () => {
  people.push("Gustavo");
  mostrarPersonas();
};

// Iterar y detenerse después de "Maria"
const iterarYSalir = () => {
  let salida = "Iterando:\n";
  for (let i = 0; i < people.length; i++) {
    salida += people[i] + "\n";
    if (people[i] === "Maria") {
      break;
    }
  }
  document.getElementById("resultado5").textContent = salida.trim();
};

// Mostrar índice de "Maria"
const mostrarIndiceMaria = () => {
  const index = people.indexOf("Maria");
  document.getElementById("resultado5").textContent = `"Maria" está en la posición: ${index}`;
};
