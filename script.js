//initialize the slide index
let currentSlideIndex = 0;

//creating the show and hide logic
function showSlide(index){
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");
    //condition check if the index is greater than or eual to the number of slides
    //if it is true then it will reset the currentslide to 0.This will loop 
    //back to the begining if the user clicks next on the list
    if(index>=slides.length){
        currentSlideIndex = 0;
    }
    if(index<0){
        currentSlideIndex = slides.length-1;
    }
    //hide all slides
    for(let i=0;i<slides.length;i++){
        slides[i].style.display ="none";
}

//remove active class from all dots
    for(let i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace("dot-active", "");
}

//display the current slide
    slides[currentSlideIndex].style.display="block";
    dots[currentSlideIndex].className += " dot-active";

//Level 2:assigning the current image src to img tag in popup
const popupImage = document.getElementById("popup-image");
popupImage.src = slides[currentSlideIndex].src;    
}//level 2 ended

//fn to change slide
function changeSlide(n){
    showSlide((currentSlideIndex += n));
}

//fn to jump to the specific slide
function currentSlide(n){
    showSlide((currentSlideIndex = n));
}

//initial display setup
showSlide(currentSlideIndex);

//Level 2 code to open and close the popup:go t0 showSlide to get the corresponding image that should popup

function openPopup(){
    const model = document.getElementById("imagepopup");
    model.style.display = "flex";
}
function closePopup(){
    const model = document.getElementById("imagepopup");
    model.style.display = "none";
}