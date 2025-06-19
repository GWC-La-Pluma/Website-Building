const images = [...document.querySelectorAll('.image')];

// popup elements
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;  //will track our current image

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `ViridityPics/viridity${i+4}.png`;
    largeImage.src = path;
    imageName.innerHTML = `Viridity: Page ${i+1}`;
    if(i < 9){
        imageIndex.innerHTML = `0${i+1}`;
    }
    else{
        imageIndex.innerHTML = `${i+1}`;
    }
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0) {
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1) {
        updateImage(index + 1);
    }
})

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft" && index > 0){
        updateImage(index - 1);
    } else if (event.key == "ArrowRight" && index < images.length - 1){
        updateImage(index + 1);
    }
});
