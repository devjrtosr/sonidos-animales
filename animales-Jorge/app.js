const animals = document.querySelectorAll("#animal");

animals[0].addEventListener("click", function () {
  new Audio("./sound-animals/Cow.mp3").play();
});

animals[1].addEventListener("click", function () {
  new Audio("./sound-animals/Coyote.mp3").play();
});

animals[2].addEventListener("click", function () {
  new Audio("./sound-animals/dog.mp3").play();
});

animals[3].addEventListener("click", function () {
  new Audio("./sound-animals/horse.mp3").play();
});

animals[4].addEventListener("click", function () {
  new Audio("./sound-animals/Jaguar.mp3").play();
});

animals[5].addEventListener("click", function () {
  new Audio("./sound-animals/macaw.mp3").play();
});
animals[6].addEventListener("click", function () {
  new Audio("./sound-animals/monkeys1.mp3").play();
});

animals[7].addEventListener("click", function () {
  new Audio("./sound-animals/red.loret.mp3").play();
});

animals[8].addEventListener("click", function () {
  new Audio("./sound-animals/Rooster.mp3").play();
});
animals[9].addEventListener("click", function () {
  new Audio("./sound-animals/toucan.mp3").play();
});

document.addEventListener("keypress", (e) => {
  reproducirSonido(e.key);
});

const reproducirSonido = (key) => {
  if (key == "T") {
    new Audio("./sound-animals/Cow.mp3").play();
  } else if (key == "Y") {
    new Audio("./sound-animals/coyote.mp3").play();
  } else if (key == "U") {
    new Audio("./sound-animals/dog.mp3").play();
  } else if (key == "I") {
    new Audio("./sound-animals/horse.mp3").play();
  } else if (key == "O") {
    new Audio("./sound-animals/Jaguar.mp3").play();
  } else if (key == "G") {
    new Audio("./sound-animals/macaw.mp3").play();
  } else if (key == "H") {
    new Audio("./sound-animals/monkeys1.mp3").play();
  } else if (key == "J") {
    new Audio("./sound-animals/red-loret.mp3").play();
  } else if (key == "K") {
    new Audio("./sound-animals/Rooster.mp3").play();
  } else if (key == "L") {
    new Audio("./sound-animals/toucan.mp3").play();
  }
};
