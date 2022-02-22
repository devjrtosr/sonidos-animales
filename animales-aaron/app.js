const animales = document.querySelectorAll('#animalSalvaje'); 
 
 
animales[0].addEventListener('click', function () { 
   new Audio('../animales-aaron/sonidos/sonido-caballo.mp3').play(); 
  
});
animales[1].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-elefante.mp3').play(); 
   
 });
 animales[2].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-jaguar.mp3').play(); 
   
 });
 animales[3].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-serpiente.mp3').play(); 
   
 });
 animales[4].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-perro.mp3').play(); 
   
 });

 animales[5].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-oso.mp3').play(); 
   
 });

 animales[6].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-puma.mp3').play(); 
   
 });

 animales[7].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-leon.mp3').play(); 
   
 });

 animales[8].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-pantera.mp3').play(); 
   
 });

 animales[0].addEventListener('click', function () { 
    new Audio('../animales-aaron/sonidos/sonido-tigre.mp3').play(); 
   
 });


      

document.addEventListener('keypress',function(e){
            reproducirSonido(e.key);
        });
        
        const reproducirSonido= (tecla) =>{
            if(tecla=='t'){
                new Audio('../animales-aaron/sonidos/sonido-caballo.mp3').play();
            } else if(tecla=='y'){
                new Audio('../animales-aaron/sonidos/sonido-elefante.mp3').play();
            } else if(tecla=='u'){
                new Audio('../animales-aaron/sonidos/sonido-jaguar.mp3').play();
            } else if(tecla=='i'){
                new Audio('../animales-aaron/sonidos/sonido-serpiente.mp3').play();
            } else if(tecla=='o'){
                new Audio('../animales-aaron/sonidos/sonido-perro.mp3').play();
            } else if(tecla=='g'){
                new Audio('../animales-aaron/sonidos/sonido-oso.mp3').play();
            } else if(tecla=='h'){
                new Audio('../animales-aaron/sonidos/sonido-panteraNegra.mp3').play();
            } else if(tecla=='j'){
                new Audio('../animales-aaron/sonidos/sonido-tigre.mp3').play();
            } else if(tecla=='k'){
                new Audio('../animales-aaron/sonidos/sonido-leon.mp3').play(); 
            } else if(tecla=='l'){
                new Audio('../animales-aaron/sonidos/sonido-puma.mp3').play();
            }
        
            
        }