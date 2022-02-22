const animales = document.querySelectorAll('#animal');
console.log(animales);

animales[0].addEventListener('click',function(){
    new Audio('animales-emily/sonidos/ballena.mp3').play();
});
animales[1].addEventListener('click',function(){
    new Audio('animales-emily/sonidos/caballo.mp3').play();
});
animales[2].addEventListener('click',function(){
    new Audio('animales-emily/sonidos/cabra.mp3').play();
});
animales[3].addEventListener('click',function(){
    new Audio('animales-emily/sonidos/perro.mp3').play();
});
animales[4].addEventListener('click',function(){
    new Audio('animales-emily/sonidos/delfin.mp3').play();
});
animales[5].addEventListener('click',function(){
    new Audio('animales-emily/sonidos/elefante.mp3').play();
});
animales[6].addEventListener('click',function(){
    new Audio('../animales-emily/sonidos/gato.mp3').play();
});
animales[7].addEventListener('click',function(){
    new Audio('../animales-emily/sonidos/leon.mp3').play();
});
animales[8].addEventListener('click',function(){
    new Audio('../animales-emily/sonidos/pinguino.mp3').play();
});
animales[9].addEventListener('click',function(){
    new Audio('../animales-emily/sonidos/vaca.mp3').play();
});
document.addEventListener('keypress',function(e){
    reproducirSonido(e.key);
});

const reproducirSonido= (tecla) =>{
    if(tecla=='a'){
        new Audio('animales-emily/sonidos/ballena.mp3').play();
    } else if(tecla=='s'){
        new Audio('animales-emily/sonidos/caballo.mp3').play();
    } else if(tecla=='d'){
        new Audio('animales-emily/sonidos/cabra.mp3').play();
    } else if(tecla=='f'){
        new Audio('animales-emily/sonidos/perro.mp3').play();
    } else if(tecla=='g'){
        new Audio('animales-emily/sonidos/delfin.mp3').play();
    } else if(tecla=='h'){
        new Audio('animales-emily/sonidos/elefante.mp3').play();
    } else if(tecla=='j'){
        new Audio('../animales-emily/sonidos/gato.mp3').play();
    } else if(tecla=='k'){
        new Audio('../animales-emily/sonidos/leon.mp3').play();
    } else if(tecla=='l'){
        new Audio('../animales-emily/sonidos/pinguino.mp3').play();
    } else if(tecla=='ñ'){
        new Audio('../animales-emily/sonidos/vaca.mp3').play();
    }  
}