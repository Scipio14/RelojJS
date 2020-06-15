//alert("El archivo JavaScript se ha cargado correctamente");

// DECLARACIÓN DE VARIABLES

function reloj() {
  const fecha = new Date();
  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const dia = fecha.getDay();
  const diaSemana = semana[dia];
  const fechaMexico = fecha.toLocaleTimeString("es-MX");
  const hMexico = document.getElementById("hMexico");
  const now = Date.now();
  const russia = now + 10800000;
  const nuevaRusia = new Date(russia);
  const horaNuevaRusia = nuevaRusia.getUTCHours();
  let minutosNuevaRusia = nuevaRusia.getUTCMinutes();

  if (minutosNuevaRusia <= 9) {
    minutosNuevaRusia = "0" + minutosNuevaRusia;
  }
  let segundosNuevaRusia = nuevaRusia.getUTCSeconds();
  if (segundosNuevaRusia <= 9) {
    segundosNuevaRusia = "0" + segundosNuevaRusia;
  }

  hMexico.innerHTML = fechaMexico;
  document.getElementById(
    "hRussia"
  ).innerHTML = `${horaNuevaRusia}:${minutosNuevaRusia}:${segundosNuevaRusia}`;
}

setInterval(() => reloj(), 1000);

const hoy = () => {
  const fecha = new Date();
  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const dia = fecha.getDay();
  const diaSemana = semana[dia];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const mes = meses[fecha.getMonth()];
  document.getElementById("dia-semana").innerHTML = diaSemana;
  document.getElementById("dia-mes").innerHTML = fecha.getDate();
  document.getElementById("mes").innerHTML = mes;
};

setInterval(() => hoy(), 1000);
