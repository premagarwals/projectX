window.addEventListener('scroll',function(){
let value = window.scrollY;
let logo = document.getElementById('centers');
logo.style.top = 50 - value*0.05 + '%';
logo.style.fontSize = 1 + value * 0.005 + 'em';
logo.style.filter = 'blur(' + value*0.01 + 'px)';
})
var r = document.querySelector(':root');
function nav(){
    let bar = document.querySelector(".nav-bar");
    let btn = document.querySelector(".btn");
    let bod = document.querySelector('#bod');
    let neon = document.querySelector('.neon');
    let morph = document.querySelector('.morph');

        if(bar.style.width === '0px'){
        bar.style.width = '60px';
        bod.style.marginLeft = '50px';
        neon.style.width = 'calc(100vw - 100px)';
        morph.style.marginLeft = '-30px';
        btn.className = 'btn bx bx-window-close';
        r.style.setProperty('--width', '60px');
    }
    else{
        bar.style.width = '0px';
        bod.style.marginLeft = '0px';
        neon.style.width = 'calc(100vw - 40px)';
        morph.style.marginLeft = '0px';
        btn.className = 'btn bx bx-menu';
        r.style.setProperty('--width', '0px');
    }  
 }
 function full(){
    let bar = document.querySelector(".nav-bar");
    let full = document.querySelector(".full");
    if(bar.style.width === '60px'){
        bar.style.width = '250px';
        r.style.setProperty('--width', '250px');
        full.className = 'full bx bx-exit-fullscreen';
    }
    else{
        bar.style.width = '60px';
        r.style.setProperty('--width', '60px');
        full.className = 'full bx bx-fullscreen';
    }  
 };
 function myFunction(e) {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
  }

