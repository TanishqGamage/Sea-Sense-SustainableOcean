// assinging elements to variables
let text = document.getElementById('intro');
let logo = document.getElementById('logo');
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let para1 = document.getElementById('para1');
let bg3 = document.getElementById('bg3');
let para2 = document.getElementById('para2');
let bg4 = document.getElementById('bg4');
let bg5 = document.getElementById('bg5');
let bg6 = document.getElementById('bg6');

// event listener for scroll Y axis
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.transition = "ease 1s";
    logo.style.transition = "ease 1s";
    bg3.style.transition = "ease 1s";
    bg4.style.transition = "ease 1s";
    bg5.style.transition = "ease 1s";
    bg6.style.transition = "ease 1s";
    text.style.marginTop = value * 1.5 + 'px';
    logo.style.marginTop = value * 0.5 + 'px';
    para1.style.marginTop = value * 0.05 + 'px';
    if(value === 0){
        text.style.marginTop = '25%';
        logo.style.marginTop = '10%';
    }
});
