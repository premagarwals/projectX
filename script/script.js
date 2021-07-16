window.addEventListener('scroll',function(){
let value = window.scrollY;
let logo = document.getElementById('centers');
logo.style.top = 50 - value*0.05 + '%';
logo.style.fontSize = 1 + value * 0.005 + 'em';
logo.style.filter = 'blur(' + value*0.01 + 'px)';
})
function nav(){
    let bar = document.querySelector(".nav-bar");
    let btn = document.querySelector(".btn");
        if(bar.style.width === '0px'){
        bar.style.width = '60px';
        btn.className = 'btn bx bx-window-close';
    }
    else{
        bar.style.width = '0px';
        btn.className = 'btn bx bx-menu';
    }  
 }
 function full(){
    let bar = document.querySelector(".nav-bar");
    let full = document.querySelector(".full");
    if(bar.style.width === '60px'){
        bar.style.width = '250px';
        full.className = 'full bx bx-exit-fullscreen';
    }
    else{
        bar.style.width = '60px';
        full.className = 'full bx bx-fullscreen';
    }  
 }
 