import { celsiusToFahrenheit } from './temperatura.js';
import { metrosToPies } from './distancia.js';
import { kilogramosToLibras } from './peso.js';

// Ventana emergente de Bienvenida
Swal.fire({
  title: '¡Bienvenido!',
  text: 'Gracias por visitar nuestro sitio web!',
  icon: 'info',
  confirmButtonText: 'Aceptar',
});

// Fondo de video
var videoElement = document.getElementById("videoFondo");

function videoCarga() {
    var videoFuente = document.createElement("source");
    videoFuente.src = "./video/intro.mp4";
    videoFuente.type = "video/mp4";
    videoElement.appendChild(videoFuente);
    videoElement.load();
}
videoCarga();

function startConfetti(duration) {
  const confettiSettings = {
    target: "confetti-canvas",
    max: "150",
    size: "2",
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126], [40, 180, 99]]
  };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, duration);
}

window.convertirTemperatura = function () {
  const temperaturaInput = document.getElementById('temperatura');
  const temperaturaCelsius = parseFloat(temperaturaInput.value);

  if (!isNaN(temperaturaCelsius)) {
    startConfetti(5000);
    const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
    Swal.fire({
      title: 'Resultado',
      html: `${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaFahrenheit} grados Fahrenheit.`,
      icon: 'info',
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un valor válido para la temperatura.',
      icon: 'error'
    });
  }
}

window.convertirDistancia = function () {
  const distanciaInput = document.getElementById('distancia');
  const distanciaMetros = parseFloat(distanciaInput.value);
  const confettiCanvas = document.getElementById("confetti-canvas");

  if (!isNaN(distanciaMetros)) {
    startConfetti(5000);
    const distanciaPies = metrosToPies(distanciaMetros);
    Swal.fire({
      title: 'Resultado',
      html: `${distanciaMetros} metros son equivalentes a ${distanciaPies} pies.`,
      icon: 'info',
      onAfterClose: () => {
        confettiCanvas.innerHTML = "";
      }
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un valor válido para la distancia.',
      icon: 'error'
    });
  }
}

window.convertirPeso = function () {
  const pesoInput = document.getElementById('peso');
  const pesoKilogramos = parseFloat(pesoInput.value);
  const confettiCanvas = document.getElementById("confetti-canvas");

  if (!isNaN(pesoKilogramos)) {
    startConfetti(5000);
    const pesoLibras = kilogramosToLibras(pesoKilogramos);
    Swal.fire({
      title: 'Resultado',
      html: `${pesoKilogramos} kilogramos son equivalentes a ${pesoLibras} libras.`,
      icon: 'info',
      onAfterClose: () => {
        confettiCanvas.innerHTML = "";
      }
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Ingrese un valor válido para el peso.',
      icon: 'error'
    });
  }
}

