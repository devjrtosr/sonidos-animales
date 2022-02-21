const animales = document.querySelectorAll(".foto-animal");

for (let i = 0; i < animales.length; i++) {
  animales[i].addEventListener("click", () => {
    reproducirSonidoConClick(i);
  });
}

document.addEventListener("keypress", (e) => {
  reproducirSonidoConKey(e.key);
});

const reproducirSonidoConClick = (animal) => {
  switch (animal) {
    case 0:
      new Audio("assets/sonidos/cerdo.mp3").play();
      break;
    case 1:
      new Audio("assets/sonidos/elefante.mp3").play();
      break;
    case 2:
      new Audio("assets/sonidos/gallo.mp3").play();
      break;
    case 3:
      new Audio("assets/sonidos/gato.mp3").play();
      break;
    case 4:
      new Audio("assets/sonidos/leon.mp3").play();
      break;
    case 5:
      new Audio("assets/sonidos/lobo.mp3").play();
      break;
    case 6:
      new Audio("assets/sonidos/mono.mp3").play();
      break;
    case 7:
      new Audio("assets/sonidos/pajaro.mp3").play();
      break;
    case 8:
      new Audio("assets/sonidos/perro.mp3").play();
      break;
    case 9:
      new Audio("assets/sonidos/vaca.mp3").play();
      break;
  }
};

const reproducirSonidoConKey = (tecla) => {
  switch (tecla) {
    case "t":
    case "T":
      new Audio("assets/sonidos/cerdo.mp3").play();
      break;
    case "y":
    case "Y":
      new Audio("assets/sonidos/elefante.mp3").play();
      break;
    case "u":
    case "U":
      new Audio("assets/sonidos/gallo.mp3").play();
      break;
    case "i":
    case "I":
      new Audio("assets/sonidos/gato.mp3").play();
      break;
    case "o":
    case "O":
      new Audio("assets/sonidos/leon.mp3").play();
      break;
    case "g":
    case "G":
      new Audio("assets/sonidos/lobo.mp3").play();
      break;
    case "h":
    case "H":
      new Audio("assets/sonidos/mono.mp3").play();
      break;
    case "j":
    case "J":
      new Audio("assets/sonidos/pajaro.mp3").play();
      break;
    case "k":
    case "K":
      new Audio("assets/sonidos/perro.mp3").play();
      break;
    case "l":
    case "L":
      new Audio("assets/sonidos/vaca.mp3").play();
      break;
  }
};
