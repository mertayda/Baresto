const carousel = document.querySelector(".fullpage-carousel");
const slidesWrapper = document.querySelector(".carousel-slides-wrapper");
const slides = document.querySelectorAll(".carousel-slide");
const slideContent = document.querySelectorAll(".slide-content");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const hamburgerBtn = document.querySelector(".hamburger-menu-button")
const navMenu = document.querySelector(".nav-menu-mobile");

let currentIndex = 0;
let totalIndex = slides.length

let slideTimer;



function  updateCarousel(){
    if(currentIndex > totalIndex - 1){
        currentIndex = 0;
    } else if(currentIndex < 0){
         currentIndex = totalIndex -1
    }
  
    slidesWrapper.style.transition = "transform 0.5s ease-in-out";
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
    slideContent.forEach((item) => {
        item.style.transition  = "transform 0.5s ease-in-out";
        item.style.transform = ``
    })
}


function nextSlide(){
    currentIndex++;
    updateCarousel();
}

function prevSlide(){
    currentIndex--;
    updateCarousel();
}


nextBtn.addEventListener("click", () => {
    nextSlide();
    autoSlide()

})

prevBtn.addEventListener("click",() => {
    prevSlide();
    autoSlide()  
    

})

function stopSlide(){
    clearInterval(slideTimer);
}


function autoSlide(){
    stopSlide();
    slideTimer = setInterval(() => {
     nextSlide();
    }, 5000);
}


autoSlide()



hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})