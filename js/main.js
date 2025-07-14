const form = document.getElementById('formPersona');
const resultadosDiv = document.getElementById('resultados');

let personas = JSON.parse(localStorage.getItem('personas')) || [];

function grupoEtario(edad) {
  if (edad >= 5 && edad <= 12) return "Infantiles";
  if (edad >= 13 && edad <= 18) return "Adolescentes";
  if (edad >= 19 && edad <= 45) return "Juveniles";
  if (edad >= 46 && edad <= 65) return "Mayores";
  return "Edad fuera de los rangos establecidos";
}

function grupoIMC(peso, altura) {
  const imc = peso / (altura * altura);
  if (imc < 18.5) return "Bajo peso";
  if (imc < 25) return "Peso medio";
  if (imc < 30) return "Sobrepeso";
  return "Obesidad";
}

function grupoIntensidad(dias) {
  if (dias <= 2) return "Baja";
  if (dias <= 4) return "Media";
  if (dias === 5) return "Alta";
  return "Muy alta";
}

function mostrarResultados() {
  resultadosDiv.innerHTML = '';
  personas.forEach(p => {
    const div = document.createElement('div');
    div.classList.add('card', 'mb-2', 'p-2');
    div.innerHTML = `
      <h5>${p.nombre}</h5>
      <p>Grupo Etario: ${grupoEtario(p.edad)}</p>
      <p>Condición Corporal: ${grupoIMC(p.peso, p.altura)}</p>
      <p>Intensidad de entrenamiento: ${grupoIntensidad(p.dias)}</p>
    `;
    resultadosDiv.appendChild(div);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const persona = {
    nombre: document.getElementById('nombre').value,
    edad: parseInt(document.getElementById('edad').value),
    peso: parseFloat(document.getElementById('peso').value),
    altura: parseFloat(document.getElementById('altura').value),
    dias: parseInt(document.getElementById('dias').value),
  };

  personas.push(persona);
  localStorage.setItem('personas', JSON.stringify(personas));
  form.reset();
  mostrarResultados();
});

mostrarResultados();
