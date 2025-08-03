const gallery = document.querySelector(".gallery")
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector(".carousel-modal")
const modalImage = document.querySelector("#carouselImage")
const modalCounter = document.querySelector(".carouselNumber")
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")
const closeBtn = document.querySelector(".close-btn")



let currentIndex = 0
let totalCarousel = galleryItems.length

galleryItems.forEach((slide,index) => {
     slide.addEventListener("click",() => {
       openModal(index)
     })

})


function openModal(index){
        modal.classList.add("active")
        let img = galleryItems[index].querySelector("img")
        modalImage.src = `${img.src}`
        modalCounter.textContent = `${currentIndex} of  ${totalCarousel}`
    }


nextBtn.addEventListener("click",() => {
  currentIndex = (currentIndex + 1)  % totalCarousel
  openModal(currentIndex);
})


prevBtn.addEventListener("click",() => {
     currentIndex  = (currentIndex - 1 + totalCarousel)  % totalCarousel 
     openModal(currentIndex)
})

closeBtn.addEventListener("click",() => {
    modal.classList.toggle("active")
})

modal.addEventListener("click",(e) => {
  if(e.target === modal){
      modal.classList.remove("active")
  }
})