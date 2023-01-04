const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html 코드만들기

const BGIMAGE_CLASSNAME = "bgImage";
bgImage.classList.add(BGIMAGE_CLASSNAME);
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //body에 추가하기
