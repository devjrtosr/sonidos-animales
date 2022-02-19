const botonPresionado = document.querySelectorAll("#sonidoAnimal");

botonPresionado[0].addEventListener("click", () => {
  new Audio("assets/sonidos/caballo.mp3").play();
});

botonPresionado[1].addEventListener("click", () => {
  new Audio("assets/sonidos/elefante.mp3").play();
});

botonPresionado[2].addEventListener("click", () => {
  new Audio("assets/sonidos/gallo.mp3").play();
});

botonPresionado[3].addEventListener("click", () => {
  new Audio("assets/sonidos/gato.mp3").play();
});

botonPresionado[4].addEventListener("click", () => {
  new Audio("assets/sonidos/leon.mp3").play();
});

botonPresionado[5].addEventListener("click", () => {
  new Audio("assets/sonidos/loro.mp3").play();
});

botonPresionado[6].addEventListener("click", () => {
  new Audio("assets/sonidos/mono.mp3").play();
});

botonPresionado[7].addEventListener("click", () => {
  new Audio("assets/sonidos/oveja.mp3").play();
});

botonPresionado[8].addEventListener("click", () => {
  new Audio("assets/sonidos/perro.mp3").play();
});

botonPresionado[9].addEventListener("click", () => {
  new Audio("assets/sonidos/vaca.mp3").play();
});

document.addEventListener("keypress", (evento) => {
  reproducirSonidoPresionado(evento.key);
});

const reproducirSonidoPresionado = (teclaPresionada) => {
  if (teclaPresionada === "t" || teclaPresionada === "T") {
    new Audio("assets/sonidos/caballo.mp3").play();
  } else if (teclaPresionada === "y" || teclaPresionada === "Y") {
    new Audio("assets/sonidos/elefante.mp3").play();
  } else if (teclaPresionada === "u" || teclaPresionada === "U") {
    new Audio("assets/sonidos/gallo.mp3").play();
  } else if (teclaPresionada === "i" || teclaPresionada === "I") {
    new Audio("assets/sonidos/gato.mp3").play();
  } else if (teclaPresionada === "o" || teclaPresionada === "O") {
    new Audio("assets/sonidos/leon.mp3").play();
  } else if (teclaPresionada === "g" || teclaPresionada === "G") {
    new Audio("assets/sonidos/loro.mp3").play();
  } else if (teclaPresionada === "h" || teclaPresionada === "H") {
    new Audio("assets/sonidos/mono.mp3").play();
  } else if (teclaPresionada === "j" || teclaPresionada === "J") {
    new Audio("assets/sonidos/oveja.mp3").play();
  } else if (teclaPresionada === "k" || teclaPresionada === "K") {
    new Audio("assets/sonidos/perro.mp3").play();
  } else if (teclaPresionada === "l" || teclaPresionada === "L") {
    new Audio("assets/sonidos/vaca.mp3").play();
  }
};
