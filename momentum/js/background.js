const images = [
    "0red.jpg", 
    "1orange.jpg", 
    "2yellow.jpg", 
    "3green.jpg", 
    "4blue.jpg", 
    "5navy.jpg", 
    "6purple.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // 새로운 요소 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);