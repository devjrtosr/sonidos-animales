const elemento = document.querySelectorAll("#animales");
console.log(elemento);

elemento[0].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/caballo.mp3").play();
});
elemento[1].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/Elefant.mp3").play();
});
elemento[2].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/gato.mp3").play();
});
elemento[3].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/hyena-laugh.mp3").play();
});
elemento[4].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/leon.mp3").play();
});
elemento[5].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/lobo.mp3").play();
});
elemento[6].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/pavoreal.mp3").play();
});
elemento[7].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/perro.mp3").play();
});
elemento[8].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/pinguino.mp3").play();
});
elemento[9].addEventListener("click", function () {
    new Audio("../animales-Yessica/assetes/sonidos/loro.mp3").play();
});

document.addEventListener("keypress", function(e){
    reproducirSonido(e.key); 
})

const reproducirSonido = (tecla) => {
    if(tecla == 'T'|| tecla == 't'){
        new Audio("../animales-Yessica/assetes/sonidos/caballo.mp3").play();
    }else if (tecla == 'Y' || tecla == 'y'){
        new Audio("../animales-Yessica/assetes/sonidos/Elefant.mp3").play();
    }else if (tecla == 'U' || tecla == 'u'){
        new Audio("../animales-Yessica/assetes/sonidos/gato.mp3").play();
    }else if (tecla == 'I' || tecla == 'i'){
        new Audio("../animales-Yessica/assetes/sonidos/hyena-laugh.mp3").play();
    }else if (tecla == 'O' || tecla == 'o'){
        new Audio("../animales-Yessica/assetes/sonidos/leon.mp3").play(); 
    }else if (tecla == 'G' || tecla == 'g'){
        new Audio("../animales-Yessica/assetes/sonidos/lobo.mp3").play();
    }else if (tecla == 'H' || tecla == 'h'){
        new Audio("../animales-Yessica/assetes/sonidos/pavoreal.mp3").play();
    }else if (tecla == 'J' || tecla == 'j'){
        new Audio("../animales-Yessica/assetes/sonidos/perro.mp3").play();
    }else if (tecla == 'K' || tecla == 'k'){
        new Audio("../animales-Yessica/assetes/sonidos/pinguino.mp3").play();
    }else if (tecla == 'L' || tecla == 'l'){
        new Audio("../animales-Yessica/assetes/sonidos/loro.mp3").play();
    }

} 