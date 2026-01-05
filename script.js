const images = [
  'https://picsum.photos/280/180?1',
  'https://picsum.photos/280/180?2',
  'https://picsum.photos/280/180?3'
];

let index = 0;
const img = document.getElementById('img');

function show(){
  img.src = images[index];
}

function next(){
  index = (index + 1) % images.length;
  show();
}

function prev(){
  index = (index - 1 + images.length) % images.length;
  show();
}

show();
