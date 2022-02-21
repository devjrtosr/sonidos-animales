const animales = document.querySelectorAll("#animal");

animales[0].addEventListener("click", function () {
  new Audio("../assets/Sonidos/burro.mp3").play();
});

animales[1].addEventListener("click", function () {
  new Audio("../assets/Sonidos/vaca.mp3").play();
});

animales[2].addEventListener("click", function () {
  new Audio("../assets/Sonidos/perro.mp3").play();
});

animales[3].addEventListener("click", function () {
  new Audio("../assets/Sonidos/gato.mp3").play();
});
animales[4].addEventListener("click", function () {
  new Audio("../assets/Sonidos/canario.mp3").play();
});

animales[5].addEventListener("click", function () {
  new Audio("../assets/Sonidos/cerdo.mp3").play();
});

animales[6].addEventListener("click", function () {
  new Audio("../assets/Sonidos/caballo.mp3").play();
});

animales[7].addEventListener("click", function () {
  new Audio("../assets/Sonidos/oveja.mp3").play();
});

animales[8].addEventListener("click", function () {
  new Audio("../assets/Sonidos/cabra.mp3").play();
});

animales[9].addEventListener("click", function () {
  new Audio("../assets/Sonidos/pollito.mp3").play();
});

document.addEventListener("keypress", function (e) {
  reproducirSonido(e.key);
});

const reproducirSonido = (tecla) => {
  if (tecla == "t") {
    new Audio("../assets/Sonidos/burro.mp3").play();
  } else if (tecla == "y") {
    new Audio("../assets/Sonidos/vaca.mp3").play();
  } else if (tecla == "u") {
    new Audio("../assets/Sonidos/perro.mp3").play();
  } else if (tecla == "i") {
    new Audio("../assets/Sonidos/gato.mp3").play();
  } else if (tecla == "o") {
    new Audio("../assets/Sonidos/canario.mp3").play();
  } else if (tecla == "g") {
    new Audio("../assets/Sonidos/cerdo.mp3").play();
  } else if (tecla == "h") {
    new Audio("../assets/Sonidos/caballo.mp3").play();
  } else if (tecla == "j") {
    new Audio("../assets/Sonidos/oveja.mp3").play();
  } else if (tecla == "k") {
    new Audio("../assets/Sonidos/cabra.mp3").play();
  } else if (tecla == "l") {
    new Audio("../assets/Sonidos/pollito.mp3").play();
  }
};
