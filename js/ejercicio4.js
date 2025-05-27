const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

// Usando filter e includes
const findCommonWithFilter = () => {
  const comunes = student1Courses.filter(course =>
    student2Courses.includes(course)
  );
  mostrarResultado(comunes);
};

// Usando for
const findCommonWithFor = () => {
  const comunes = [];
  for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
      if (student1Courses[i] === student2Courses[j] && !comunes.includes(student1Courses[i])) {
        comunes.push(student1Courses[i]);
      }
    }
  }
  mostrarResultado(comunes);
};

// Usando while
const findCommonWithWhile = () => {
  const comunes = [];
  let i = 0;
  while (i < student1Courses.length) {
    let j = 0;
    while (j < student2Courses.length) {
      if (student1Courses[i] === student2Courses[j] && !comunes.includes(student1Courses[i])) {
        comunes.push(student1Courses[i]);
      }
      j++;
    }
    i++;
  }
  mostrarResultado(comunes);
};

// Mostrar resultados
const mostrarResultado = (comunes) => {
  const mensaje = comunes.length > 0
    ? `Cursos en común: ${comunes.join(", ")}`
    : "No hay cursos en común.";
  document.getElementById("resultado4").textContent = mensaje;
};
