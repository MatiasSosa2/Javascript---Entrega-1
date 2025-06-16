/*
Idea del simulador :
 1: Pedir datos mediante funciones, 1 vez a cada persona
 2: Procesar esos datos, según los datos ingresados tomar una decision en especifico
 3: Dar como respuesta la mejor opcion para la persona, segun los datos procesados
*/


// Lista de personas a ingresar
const personas = ["Juan", "Gabriel", "Antonio", "Hernán", "Iván"];

// Función para clasificar por grupo etario
function grupoEtario(edad) {
  if (edad >= 5 && edad <= 12) {
    return "Infantiles";
  } else if (edad >= 13 && edad <= 18) {
    return "Adolescentes";
  } else if (edad >= 19 && edad <= 45) {
    return "Juveniles";
  } else if (edad >= 46 && edad <= 65) {
    return "Mayores";
  } else {
    return "Edad fuera de los rangos establecidos";
  }
}

// Función para clasificar IMC (Indice de Masa Corporal)
function grupoIMC(peso, altura) {
  const imc = peso / (altura * altura);
  let categoria = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 25) {
    categoria = "Peso medio";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }

  return categoria;
}

// Función para clasificar intensidad del entrenamiento
function grupoIntensidad(dias) {
  if (dias === 2 || dias === 1 ) {
    return "Baja";
  } else if (dias === 3 || dias === 4) {
    return "Media";
  } else if (dias === 5) {
    return "Alta";
  } else if (dias > 5) {
    return "Muy alta";
  } 
}

// Función principal: ingreso de datos y clasificación
for (let i = 0; i < personas.length; i++) {
  let edad;
  do {
    edad = Number(prompt(personas[i] + ", ingrese su edad (entre 5 y 65 años):"));
  } while (isNaN(edad) || edad < 5 || edad > 65);

  let peso;
  do {
    peso = Number(prompt(personas[i] + ", ingrese su peso en kg (entre 50 y 150):"));
  } while (isNaN(peso) || peso < 50 || peso > 150);

  let altura;
  do {
    altura = Number(prompt(personas[i] + ", ingrese su altura en metros (ej. 1.75, entre 1.10 y 2.30):"));
  } while (isNaN(altura) || altura < 1.10 || altura > 2.30);

  let dias;
  do {
    dias = Number(prompt(personas[i] + ", ¿cuántos días a la semana entrenará? (entre 1 y 7):"));
  } while (isNaN(dias) || dias < 2 || dias > 7);

  // Procesamiento
  const clasificacionEdad = grupoEtario(edad);
  const clasificacionIMC = grupoIMC(peso, altura);
  const clasificacionIntensidad = grupoIntensidad(dias);

  // Salida por consola y alerta
  const mensaje = `El alumno ${personas[i]} entrenará en el grupo de ${clasificacionEdad}, 
teniendo en cuenta que tiene una condición de ${clasificacionIMC}, 
y entrenará con una intensidad ${clasificacionIntensidad}.`;

  alert(mensaje);
  console.log(mensaje);
}







