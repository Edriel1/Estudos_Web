const paragrafo = document.querySelector('.Paragrafos');
const paragrafos = paragrafo.querySelectorAll('p');

const style_body = getComputedStyle(document.body);
const body_background_color = style_body.backgroundColor;

for(let p of paragrafos){
    p.style.backgroundColor = body_background_color;
    p.style.color = 'white';
}