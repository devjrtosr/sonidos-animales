const animales1 = document.querySelectorAll("#animales");

animales1[0].addEventListener("click", function () {
  new Audio("../assets/Sonido/bird-sounds-barn-swallow.mp3").play();
});
animales1[1].addEventListener("click", function () {
  new Audio("../assets/Sonido/aquatic-sounds-beluga-whale.mp3").play();
});
animales1[2].addEventListener("click", function () {
  new Audio("../assets/Sonido/mammal-sounds-red-deer.mp3").play();
});
animales1[3].addEventListener("click", function () {
  new Audio("../assets/Sonido/geckotokay.mp3").play();
});
animales1[4].addEventListener("click", function () {
  new Audio("../assets/Sonido/animal-sounds-wolf.mp3").play();
});

const animales2 = document.querySelectorAll("#animales2");

animales2[0].addEventListener("click", function () {
  new Audio("../assets/Sonido/mammal-sounds-eurasian-lynx.mp3").play();
});
animales2[1].addEventListener("click", function () {
  new Audio("../assets/Sonido/efectos-de-sonido-leon-lion.mp3").play();
});
animales2[2].addEventListener("click", function () {
  new Audio("../assets/Sonido/aquatic-sounds-killer-whale.mp3").play();
});
animales2[3].addEventListener("click", function () {
  new Audio("../assets/Sonido/animal-sounds-red-fox.mp3").play();
});
animales2[4].addEventListener("click", function () {
  new Audio("../assets/Sonido/audio-del-ornitorrincohd.mp3").play();
});

const reproducirsonido = (tecla) => {
  if (tecla == "q") {
    new Audio("../assets/Sonido/bird-sounds-barn-swallow.mp3").play();
  } else if (tecla == "w") {
    new Audio("../assets/Sonido/aquatic-sounds-beluga-whale.mp3").play();
  } else if (tecla == "e") {
    new Audio("../assets/Sonido/mammal-sounds-red-deer.mp3").play();
  } else if (tecla == "r") {
    new Audio("../assets/Sonido/geckotokay.mp3").play();
  } else if (tecla == "t") {
    new Audio("../assets/Sonido/animal-sounds-wolf.mp3").play();
  } else if (tecla == "a") {
    new Audio("../assets/Sonido/mammal-sounds-eurasian-lynx.mp3").play();
  } else if (tecla == "s") {
    new Audio("../assets/Sonido/efectos-de-sonido-leon-lion.mp3").play();
  } else if (tecla == "d") {
    new Audio("../assets/Sonido/aquatic-sounds-killer-whale.mp3").play();
  } else if (tecla == "f") {
    new Audio("../assets/Sonido/animal-sounds-red-fox.mp3").play();
  } else if (tecla == "g") {
    new Audio("../assets/Sonido/audio-del-ornitorrincohd.mp3").play();
  }
};

document.addEventListener("keypress", function (m) {
  reproducirsonido(m.key);
});
