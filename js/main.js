var state = 1;
console.log(state); //SACAR
function adelante(){
    if(state < 3) state ++;
    else state = 1;

    if (state == 1){
        show1();
        }
    
    if (state == 2){
        show2();        
    }

    if (state == 3){
        show3();        
    }
    console.log(state);
}


function atras(){
    if(state > 1 && state <= 3 ) state --;
    else state = 3;
    console.log(state); //SACAR
    if (state == 1){
        show1();
    }
    
    if (state == 2){
        show2();
    }
    if (state == 3){
        show3();
    }
}

function show1(){
    // imagen principal
    document.getElementById('background-1').style.visibility='visible';
    document.getElementById('background-3').style.visibility='hidden';
    document.getElementById('background-2', 'main-image-2').style.visibility='hidden';
    document.getElementById('main-image-2').style.display='none';
    // imagenes siguientes
    document.getElementById('next-image-1').style.display='block';
    document.getElementById('next-image-2').style.display='none';
    document.getElementById('next-image-3').style.display='none';    
    //texto principal 
    // document.getElementById('titulo-imagen').style.visibility='visible';
    // document.getElementById('titulo-imagen-2').style.visibility='hidden';
    // document.getElementById('titulo-imagen-3').style.visibility='hidden'; 
    document.getElementById('titulo-imagen').style.display='block';
    document.getElementById('titulo-imagen-2').style.display='none';
    document.getElementById('titulo-imagen-3').style.display='none'; 
    //textos siguientes
    document.getElementById('next-titulo').style.display='block'; 
    document.getElementById('next-titulo-2').style.display='none'; 
    document.getElementById('next-titulo-3').style.display='none';    
    // lineas de avance
    document.getElementById('line-1').style.opacity='100%'; 
    document.getElementById('line-2').style.opacity='40%'; 
    document.getElementById('line-3').style.opacity='40%';
}

function show2(){
    //imagen principal
    document.getElementById('background-1').style.visibility='hidden';
    document.getElementById('background-3').style.visibility='hidden';
    document.getElementById('background-2', 'main-image-2').style.visibility='visible';
    document.getElementById('main-image-2').style.display='block';
    //imagenes siguientes
    document.getElementById('next-image-1').style.display='none';
    document.getElementById('next-image-2').style.display='block';
    document.getElementById('next-image-3').style.display='none';
    //texto principal 
    // document.getElementById('titulo-imagen').style.visibility='hidden';
    // document.getElementById('titulo-imagen-2').style.visibility='visible';
    // document.getElementById('titulo-imagen-3').style.visibility='hidden';
    document.getElementById('titulo-imagen').style.display='none';
    document.getElementById('titulo-imagen-2').style.display='block';
    document.getElementById('titulo-imagen-3').style.display='none';  
    //textos siguientes
    document.getElementById('next-titulo').style.display='none'; 
    document.getElementById('next-titulo-2').style.display='block'; 
    document.getElementById('next-titulo-3').style.display='none';    
    // lineas de avance
    document.getElementById('line-2').style.opacity='100%'; 
    document.getElementById('line-1').style.opacity='40%'; 
    document.getElementById('line-3').style.opacity='40%';   
}

function show3(){
    // imagen principal
    document.getElementById('background-2').style.visibility='hidden';
    document.getElementById('background-1').style.visibility='hidden';
    document.getElementById('background-3', 'main-image-3').style.visibility='visible';
    document.getElementById('main-image-3').style.display='block';
    // imagenes siguientes
    document.getElementById('next-image-1').style.display='none';
    document.getElementById('next-image-3').style.display='block';
    document.getElementById('next-image-2').style.display='none';   
    // texto principal
    // document.getElementById('titulo-imagen').style.visibility='hidden';
    // document.getElementById('titulo-imagen-2').style.visibility='hidden';
    // document.getElementById('titulo-imagen-3').style.visibility='visible';
    document.getElementById('titulo-imagen').style.display='none';
    document.getElementById('titulo-imagen-2').style.display='none';
    document.getElementById('titulo-imagen-3').style.display='block';    
    //textos siguientes
    document.getElementById('next-titulo').style.display='none';
    document.getElementById('next-titulo-2').style.display='none';
    document.getElementById('next-titulo-3').style.display='block';   
    // lineas de avance
    document.getElementById('line-3').style.opacity='100%'; 
    document.getElementById('line-2').style.opacity='40%'; 
    document.getElementById('line-1').style.opacity='40%';
}