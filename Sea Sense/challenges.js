let text = document.getElementById('ContentIntro');
let bg1 = document.getElementById('bg1cn');
let bg2 = document.getElementById('bg2');
let para1 = document.getElementById('para1');
let bg3 = document.getElementById('bg3');
let bg4 = document.getElementById('bg4');
let bg5 = document.getElementById('bg5');
let bg6 = document.getElementById('bg6');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.transition = "ease 1s";
    bg3.style.transition = "ease 1s";
    bg4.style.transition = "ease 1s";
    bg5.style.transition = "ease 1s";
    bg6.style.transition = "ease 1s";
    text.style.marginTop = value * 1 + 'px'
});