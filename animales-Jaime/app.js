const animalesSuperior = document.querySelectorAll('#AnimalesColumnaSuperior')


animalesSuperior[0].addEventListener('click',function(){
   new Audio('assets/sonidos/avispa.mp3').play();
});
animalesSuperior[1].addEventListener('click',function(){
    new Audio('assets/sonidos/delfin.mp3').play();
 });

 animalesSuperior[2].addEventListener('click',function(){
    new Audio('assets/sonidos/foca.mp3').play();
 });

 animalesSuperior[3].addEventListener('click',function(){
    new Audio('assets/sonidos/grillo.mp3').play();
 });

 animalesSuperior[4].addEventListener('click',function(){
    new Audio('assets/sonidos/koala.mp3').play();
 });

 const animalesInferior = document.querySelectorAll('#AnimalesColumnaInferior')


 animalesInferior[0].addEventListener('click',function(){
    new Audio('assets/sonidos/lince.mp3').play();
 });

 animalesInferior[1].addEventListener('click',function(){
    new Audio('assets/sonidos/lobo.mp3').play();
 });
 animalesInferior[2].addEventListener('click',function(){
    new Audio('assets/sonidos/penguin.mp3').play();
 });
 animalesInferior[3].addEventListener('click',function(){
    new Audio('assets/sonidos/rana.mp3').play();
 });
 animalesInferior[4].addEventListener('click',function(){
    new Audio('assets/sonidos/zorro.mp3').play();
 });


 document.addEventListener('keypress',function(e){
    reproducirAnimal(e.key);
});

    const reproducirAnimal = (tecla) =>{

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
            stopAudio();
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
