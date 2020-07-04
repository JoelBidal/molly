// function aparecer(){
//     document.getElementById('background-1').style.visibility='hidden';
//     document.getElementById('background-2', 'main-image-2').style.visibility='visible';
//     document.getElementById('main-image-2').style.display='block';

//     document.getElementById('next-image-1').style.display='none';
//     document.getElementById('next-image-2').style.display='block';
    
//     document.getElementById('line-2').style.opacity='100%';

// }

// function volver(){
//     document.getElementById('line-2').style.opacity='40%';

//     document.getElementById('background-1').style.visibility='visible';
//     document.getElementById('background-2', 'main-image-2').style.visibility='hidden';
//     document.getElementById('main-image-2').style.display='none';

//     document.getElementById('next-image-1').style.display='block';
//     document.getElementById('next-image-2').style.display='none';
// }

var state = 0;
function adelante(){
    state ++;
    console.log(state);
    if (state == 1){
            show1();
        }
    
    if (state == 2){
            show2();
            state -= 2;
            
        }
}


function atras(){
    if(state == 0)
             state = 2;
    state --;
    console.log(state);
    if (state == 1){
        console.log("state2");
        show1();
        state = 2;
    }
    
    if (state == 2){
        console.log("state2");
        show2();
    }
}


function show1(){
        document.getElementById('background-1').style.visibility='hidden';
        document.getElementById('background-2', 'main-image-2').style.visibility='visible';
        document.getElementById('main-image-2').style.display='block';
    
        document.getElementById('next-image-1').style.display='none';
        document.getElementById('next-image-2').style.display='block';
        
        document.getElementById('line-2').style.opacity='100%';   
}

function show2(){
        document.getElementById('line-2').style.opacity='40%';
        
        document.getElementById('background-1').style.visibility='visible';
        document.getElementById('background-2', 'main-image-2').style.visibility='hidden';
        document.getElementById('main-image-2').style.display='none';
    
        document.getElementById('next-image-1').style.display='block';
        document.getElementById('next-image-2').style.display='none';  
}