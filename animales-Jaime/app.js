const animalesColumnaSuperior = document.querySelectorAll('#AnimalesColumnaSuperior')


animalesColumnaSuperior[0].addEventListener('click',function(){
   new Audio('assets/sonidos/avispa.mp3').play();
});
animalesColumnaSuperior[1].addEventListener('click',function(){
    new Audio('assets/sonidos/delfin.mp3').play();
 });

 animalesColumnaSuperior[2].addEventListener('click',function(){
    new Audio('assets/sonidos/foca.mp3').play();
 });

 animalesColumnaSuperior[3].addEventListener('click',function(){
    new Audio('assets/sonidos/grillo.mp3').play();
 });

 animalesColumnaSuperior[4].addEventListener('click',function(){
    new Audio('assets/sonidos/koala.mp3').play();
 });

 const animalesColumnaInferior = document.querySelectorAll('#AnimalesColumnaInferior')


 animalesColumnaInferior[0].addEventListener('click',function(){
    new Audio('assets/sonidos/lince.mp3').play();
 });

 animalesColumnaInferior[1].addEventListener('click',function(){
    new Audio('assets/sonidos/lobo.mp3').play();
 });
 animalesColumnaInferior[2].addEventListener('click',function(){
    new Audio('assets/sonidos/penguin.mp3').play();
 });
 animalesColumnaInferior[3].addEventListener('click',function(){
    new Audio('assets/sonidos/rana.mp3').play();
 });
 animalesColumnaInferior[4].addEventListener('click',function(){
    new Audio('assets/sonidos/zorro.mp3').play();
 });


 document.addEventListener('keypress',function(e){
    reproducirSonidoAnimal(e.key);
});

    const reproducirSonidoAnimal = (tecla) =>{
        if(tecla == 'a'){
            new Audio('assets/sonidos/avispa.mp3').play();
        }else if(tecla == 's'){
            new Audio('assets/sonidos/delfin.mp3').play();
        }else if(tecla == 'd'){
            new Audio('assets/sonidos/foca.mp3').play();
        }else if(tecla == 'f'){
            new Audio('assets/sonidos/grillo.mp3').play();
        }else if(tecla == 'g'){
            new Audio('assets/sonidos/koala.mp3').play();
        }else if(tecla == 'z'){
            new Audio('assets/sonidos/lince.mp3').play();
        }else if(tecla == 'x'){
            new Audio('assets/sonidos/lobo.mp3').play();
        }else if(tecla == 'c'){
            new Audio('assets/sonidos/penguin.mp3').play();
        }else if(tecla == 'v'){
            new Audio('assets/sonidos/rana.mp3').play();
        }else if(tecla == 'b'){
            new Audio('assets/sonidos/zorro.mp3').play();
        }
     };
