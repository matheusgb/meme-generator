// seletores
const input = document.querySelector('#text-input');
const texto = document.querySelector('#meme-text');
const inputimagem = document.querySelector('#meme-insert');
const imagem = document.querySelector('#meme-image');
const fogo = document.querySelector('#fire');
const agua = document.querySelector('#water');
const terra = document.querySelector('#earth');
const vazio = document.querySelector('#void');
const caze = document.querySelector('#meme-1');
const cyber = document.querySelector('#meme-2');
const chad = document.querySelector('#meme-3');
const kuduro = document.querySelector('#meme-4');

// funções
function dizeres() {
  texto.innerHTML = input.value;
}

function img() {
  // https://stackoverflow.com/a/62167551/17687777
  imagem.src = URL.createObjectURL(event.target.files[0]);
}

function deletar() {
  document.getElementById('meme-image-container').style.border = '1px solid black';
}

function queimar() {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
}

function inundar() {
  document.getElementById('meme-image-container').style.border = '5px double blue';
}

function soterrar() {
  document.getElementById('meme-image-container').style.border = '6px groove green'
}

function casimiro() {
  imagem.src = 'imgs/meme1.png'
}

function punk() {
  imagem.src = 'imgs/meme2.png'
}

function giga() {
  imagem.src = 'imgs/meme3.png'
}

function rei() {
  imagem.src = 'imgs/meme4.png'
}
// listeners
vazio.addEventListener('click', deletar);
fogo.addEventListener('click', queimar);
agua.addEventListener('click', inundar);
terra.addEventListener('click', soterrar);
caze.addEventListener('click', casimiro);
cyber.addEventListener('click', punk);
chad.addEventListener('click', giga);
kuduro.addEventListener('click', rei);
