// Selecciona el elemento de audio, el contenedor de letras y el botón de pantalla completa
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var fullscreenButton = document.querySelector("#fullscreen-button");

// Función para iniciar la reproducción del audio
function startAudio() {
  audio.play().catch(function (error) {
    console.error("Error al intentar reproducir el audio:", error);
  });
}

// Función para ocultar el botón de pantalla completa después de hacer clic
function hideFullscreenButton() {
  fullscreenButton.style.display = "none";
}

fullscreenButton.addEventListener("click", function () {
  startAudio();
  hideFullscreenButton();
});

var lyricsData = [
  { text: "Quien te dijo esa mentira....", time: 7 },
  { text: "Que eres fácil de olvidar....", time: 10 },
  { text: "No hagas caso a tus amigos...", time: 14 },
  { text: "Solo son testigos de la otra mitad...", time: 16 },
  { text: "Dos besos son demasiado...", time: 21 },
  { text: "Y un beso no bastará...", time: 24 },
  { text: "Y aunque adviertan al soldado...", time: 27 },
  { text: "Si está enamorado en guerra morirá...", time: 31 },
  { text: "Ya no tienes que cuidarme....", time: 34 },
  { text: "Porque yo...", time: 39 },
  { text: "Siempre he sabido que tus besos matan", time: 41 },
  { text: "Que tus promesas riman con dolor", time: 45 },
  { text: "Que eres experta en robarle latidos a mi corazón", time: 49 },
  { text: "Y tú nunca juraste que saldría ileso", time: 55 },
  { text: "Ya no te atrevas a pedir perdón", time: 57 },
  { text: "Yo te confieso que no me arrepiento", time: 60 },
  { text: "Y aunque estoy sufriendo podría estar peor", time: 63 },
  { text: "Woah oh oh", time: 68}, 
  { text: "Sabiendo que tus besos matan moriré de amor", time: 69 },
  { text: "Woah oh", time: 73 },
  { text: "Sabiendo que tus besos matan moriré de amor", time: 74 },
  { text: "Woah oh", time: 81 },
  { text: "Sabiendo que tus besos matan", time: 82 },
  { text: "Para mí nunca fue un juego", time: 87 },
  { text: "Para ti fue un beso más", time: 89 },
  { text: "Y si vuelves a mi vida", time: 92 },
  { text: "No es que estés perdida", time: 94 },
  { text: "No es casualidad", time: 97 },
  { text: "Ya no tienes que cuidarme porque yo", time: 99 },
  { text: "Siempre he sabido que tus besos matan", time: 106  },
  { text: "Que tus promesas riman con dolor", time: 111 },
  { text: "Que eres experta en robarle latidos a mi corazón", time: 114 },
  { text: "Y tú nunca juraste que saldría ileso", time: 120 },
  { text: "Ya no te atrevas a pedir perdón", time: 124 },
  { text: "Yo te confieso que no me arrepiento", time: 128 },
  { text: "Y aunque estoy sufriendo podría estar peor", time: 131 },
  { text: "Woah oh oh", time: 134 },
  { text: "Sabiendo que tus besos matan moriré de amor", time: 135 },
  { text: "Woah oh", time: 141 },
  { text: "Sabiendo que tus besos matan moriré de amor", time: 142 },
  { text: "Woah oh", time: 147 },
  { text: "Sabiendo que tus besos matan....", time: 148 },

  { text: "Ganaré la Guerra para conquistarte  ", time: 153 },
  { text: " no quiero admitir que te vas, que te vas ", time: 156 },
  { text: "Ganaré la Guerra para conquistarte  ", time: 159 },
  { text: "no quiero admitir que te vas, que te vas  ", time: 162 },
  { text: " Yo perdí batallas por nunca aceptar que ", time: 166 },
  { text: " no eras fácil de olvidar ", time: 169 },
  { text: " porque yo siempre he sabido que tus besos matan ", time: 173 },
  { text: " que tus promesas riman con dolor", time: 177 },
  { text: " que eres experta en robarle latidos a mi corazón ", time: 180 },
  { text: "y tú nunca juraste que saldría ileso  ", time: 187 },
  { text: "ya no te atrevas a pedir perdón  ", time: 190 },
  { text: "yo te confieso que no me arrepiento  ", time: 193 },
  { text: "y aunque estoy sufriendo  ", time: 195 },
  { text: "puedo estar peor  ", time: 197 },
  { text: " sabiendo que tus besos matan ", time: 202 },
  { text: " moriré de amor ", time: 204 },
  { text: "ohh ohh  ", time: 205},
  { text: " sabiendo que tus besos matan ", time: 207 },
  { text: " moriré de amor ", time: 209 },
  { text: "ohh ohh  ", time: 212 },
  { text: "sabiendo que tus besos matan ", time: 215 },


];

// Función para obtener la duración entre dos líneas
function getLyricDuration(currentIndex) {
  if (currentIndex < lyricsData.length - 1) {
    return lyricsData[currentIndex + 1].time - lyricsData[currentIndex].time;
  }
  return 5; // Tiempo de duración por defecto para la última línea
}

// Función para actualizar las letras de manera gradual
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLineIndex = lyricsData.findIndex(
    (line) => time >= line.time && time < line.time + getLyricDuration(lyricsData.indexOf(line)) // Calcula la duración exacta para cada línea
  );

  if (currentLineIndex !== -1) {
    lyrics.innerHTML = lyricsData[currentLineIndex].text;
    lyrics.style.opacity = 1; // Mantiene la opacidad máxima cuando está visible
  } else {
    fadeOutLyrics();
  }
}

// Función para desvanecer gradualmente la letra
function fadeOutLyrics() {
  var fadeEffect = setInterval(function () {
    if (!lyrics.style.opacity) {
      lyrics.style.opacity = 1;
    }
    if (lyrics.style.opacity > 0) {
      lyrics.style.opacity -= 0.1; // Reduce la opacidad gradualmente
    } else {
      clearInterval(fadeEffect);
    }
  }, 100); // Ajuste de velocidad del desvanecimiento
}

// Usar requestAnimationFrame para actualizar letras constantemente
function animate() {
  updateLyrics();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

// Selecciona el contenedor del girasol
var sunflowerContainer = document.querySelector('.sunflower-container');

// Función para crear pétalos
function createPetals(numPetals) {
  var angleStep = 360 / numPetals; // Ángulo entre cada pétalo

  for (var i = 0; i < numPetals; i++) {
    var petal = document.createElement('div');
    petal.className = 'sunflower-petal';
    var angle = angleStep * i;
    var x = Math.cos(angle * (Math.PI / 180)) * 100; // Ajusta la distancia desde el centro
    var y = Math.sin(angle * (Math.PI / 180)) * 100; // Ajusta la distancia desde el centro
    petal.style.transform = `rotate(${angle}deg) translate(${x}px, ${y}px)`;
    sunflowerContainer.appendChild(petal);
  }
}

// Llama a la función para crear pétalos
createPetals(20); // Puedes ajustar el número de pétalos
