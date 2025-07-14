
const reviewWrapper = document.querySelector(".review-wrapper")
const reviewCarousel = document.querySelector(".review-carousel")
const reviewSlide = document.querySelectorAll(".review-slide")
const reviewNext = document.querySelector(".review-next")
const reviewPrev = document.querySelector(".review-prev")
const dotsNagivation = document.querySelector(".dots-nagivation")
const carouselDots = document.querySelector(".carousel-dots")


let reviewIndex = 0;
let  totalCarousel = reviewSlide.length
let autoPlayInterval;



function updateDots(){
    const dots = document.querySelectorAll(".dots")
    dots.forEach(dot => dot.classList.remove("dotActive"))
    if(dots[reviewIndex]){
         dots[reviewIndex].classList.add("dotActive")
    }
}


function changeSlide(line){


   

      reviewCarousel.style.transform = `translateX(-${line * (100/totalCarousel)}%)`
 

   reviewIndex = line;
   updateDots()
}





function autoPlayNextSlide(){
    const nextGen =  (reviewIndex + 1) % totalCarousel
    changeSlide(nextGen)
}

function startAutoPlay(){
    clearInterval(autoPlayInterval)
    autoPlayInterval = setInterval(() => {
       autoPlayNextSlide()
    },3000)
}


function stopAutoPlay(){
    clearInterval(autoPlayInterval)
}

function reviewNextSlide(){
    let currentline =  (reviewIndex + 1) % totalCarousel
    changeSlide(currentline)
    stopAutoPlay()
}


function reviewPrevSlide(){
  let preveiousLine = (reviewIndex - 1 + totalCarousel ) % totalCarousel
   changeSlide(preveiousLine)
     stopAutoPlay()
}




reviewNext.addEventListener("click",reviewNextSlide)
reviewPrev.addEventListener("click",reviewPrevSlide)


// create dots



for(let i = 0; i<totalCarousel;i++){
    const dotsButton = document.createElement("button")
    dotsButton.classList.add("dots")
    dotsButton.addEventListener("click", () => {
        changeSlide(i)
    })

    carouselDots.appendChild(dotsButton)
}

if(totalCarousel > 0){
    changeSlide(0)
    startAutoPlay()

}



