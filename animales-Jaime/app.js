const animales = document.querySelectorAll('#Animales1')


animales[0].addEventListener('click',function(){
   new Audio('assets/sonidos/avispa.mp3').play();
});
animales[1].addEventListener('click',function(){
    new Audio('assets/sonidos/delfin.mp3').play();
 });

 animales[2].addEventListener('click',function(){
    new Audio('assets/sonidos/foca.mp3').play();
 });

 animales[3].addEventListener('click',function(){
    new Audio('assets/sonidos/grillo.mp3').play();
 });

 animales[4].addEventListener('click',function(){
    new Audio('assets/sonidos/koala.mp3').play();
 });

 const animales0 = document.querySelectorAll('#Animales2')


 animales0[0].addEventListener('click',function(){
    new Audio('assets/sonidos/lince.mp3').play();
 });

 animales0[1].addEventListener('click',function(){
    new Audio('assets/sonidos/lobo.mp3').play();
 });
 animales0[2].addEventListener('click',function(){
    new Audio('assets/sonidos/penguin.mp3').play();
 });
 animales0[3].addEventListener('click',function(){
    new Audio('assets/sonidos/rana.mp3').play();
 });
 animales0[4].addEventListener('click',function(){
    new Audio('assets/sonidos/zorro.mp3').play();
 });


 document.addEventListener('keypress',function(e){
    repoducirAnimal(e.key);
});

    const repoducirAnimal = (tecla) =>{

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
