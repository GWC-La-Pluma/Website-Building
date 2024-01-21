/* Slideshow galleries & images */
const slideshow1 = document.getElementById("budding_gallery");
const slideshow2 = document.getElementById("blooming_gallery");
const slideshow3 = document.getElementById("decaying_gallery");
const slideimages1 = slideshow1.querySelectorAll(".image");
const slideimages2 = slideshow2.querySelectorAll(".image");
const slideimages3 = slideshow3.querySelectorAll(".image");

/* ALL OF THE POPUPS */
/* Budding popup */
const popup1 = document.querySelector('.budding_popup');
const closeBtn1 = popup1.querySelector('.close-btn');
const imageName1 = popup1.querySelector('.image-name');
const largeImage1 = popup1.querySelector('.large-image');
const imageIndex1 = popup1.querySelector('.index');
const leftArrow1 = popup1.querySelector('.left-arrow');
const rightArrow1 = popup1.querySelector('.right-arrow');

/* Blooming popup */
const popup2 = document.querySelector('.blooming_popup');
const closeBtn2 = popup2.querySelector('.close-btn');
const imageName2 = popup2.querySelector('.image-name');
const largeImage2 = popup2.querySelector('.large-image');
const imageIndex2 = popup2.querySelector('.index');
const leftArrow2 = popup2.querySelector('.left-arrow');
const rightArrow2 = popup2.querySelector('.right-arrow');

/* Decaying popup */
const popup3 = document.querySelector('.decaying_popup');
const closeBtn3 = popup3.querySelector('.close-btn');
const imageName3 = popup3.querySelector('.image-name');
const largeImage3 = popup3.querySelector('.large-image');
const imageIndex3 = popup3.querySelector('.index');
const leftArrow3 = popup3.querySelector('.left-arrow');
const rightArrow3 = popup3.querySelector('.right-arrow');

/* Indexes for each popup */
let index1 = 0;
let index2 = 0;
let index3 = 0;

/* Adding listeners for all of the imagest */
slideimages1.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i, 1);
        popup1.classList.toggle('active');
    })
})

slideimages2.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i, 2);
        popup2.classList.toggle('active');
    })
})

slideimages3.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i, 3);
        popup3.classList.toggle('active');
    })
})

/* NOTE: For the following methods, find a way to merge them so that they work
 for all slideshows */

/* Methods to update images */
const updateImage = (i, slideshowNum) => {
    if(slideshowNum == 1){
        let path = `EfflorescencePics/${i+6}.png`;
        largeImage1.src = path;
        imageName1.innerHTML = `Efflorescence: Page ${i+6}`;
        
        if (i < 9){
            imageIndex1.innerHTML = `0${i+6}`;
        }
        else{
            imageIndex1.innerHTML = `${i+6}`;
        }
        index1 = i;
    }
    else if(slideshowNum == 2){
        let path = `EfflorescencePics/${i+16}.png`;
        largeImage2.src = path;
        imageName2.innerHTML = `Efflorescence: Page ${i+16}`;

        imageIndex2.innerHTML = `${i+16}`;
        index2 = i;
    }
    else{
        let path = `EfflorescencePics/${i+26}.png`;
        largeImage3.src = path;
        imageName3.innerHTML = `Efflorescence: Page ${i+26}`;

        imageIndex3.innerHTML = `${i+26}`;
        index3 = i;
    }
}

/* X-button controls for each slideshow */
closeBtn1.addEventListener('click', () => {
    popup1.classList.toggle('active');
})

closeBtn2.addEventListener('click', () => {
    popup2.classList.toggle('active');
})

closeBtn3.addEventListener('click', () => {
    popup3.classList.toggle('active');
})

/* Left arrow controls for each slideshow */
leftArrow1.addEventListener('click', () => {
    if(index1 > 0){
        updateImage(index1 - 1, 1);
    }
})

leftArrow2.addEventListener('click', () => {
    if(index2 > 0){
        updateImage(index2 - 1, 2);
    }
})

leftArrow3.addEventListener('click', () => {
    if(index3 > 0){
        updateImage(index3 - 1, 3);
    }
})

/* Left arrow controls for each slideshow */
rightArrow1.addEventListener('click', () => {
    if(index1 < slideimages1.length - 1){
        updateImage(index1 + 1, 1);
    }
})

rightArrow2.addEventListener('click', () => {
    if(index2 < slideimages2.length - 1){
        updateImage(index2 + 1, 2);
    }
})

rightArrow3.addEventListener('click', () => {
    if(index3 < slideimages3.length - 1){
        updateImage(index3 + 1, 3);
    }
})

// Not working for some reason???? ArrowRight is the original code (unchanged)
document.addEventListener('keyup', (e) => {
    if(e.code === "ArrowLeft"){
        if(popup1.matches('.active')){
            if(index1 > 0){
                updateImage(index1 - 1, 1);
            }
        }
        else if(popup2.matches('.active')){
            if(index2 > 0){
                updateImage(index2 - 1, 2);
            }
        }
        else if(popup3.matches('.active')){
            if(index3 > 0){
                updateImage(index3 - 1, 3);
            }
        }
    }

    if(e.code === "ArrowRight"){
        if(index < slideimages1.length - 1){
            updateImage(index + 1);
        }
    }
})