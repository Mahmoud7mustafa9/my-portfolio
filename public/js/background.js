const images = [
  "images/background1.jpg",
  "images/background2.jpg",
  "images/background3.jpg",
  "images/background4.jpg",
];

const bg = document.querySelector(".bg-image");
let index = 0;

function changeImage() {
  bg.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

changeImage();

setInterval(changeImage, 10000);

