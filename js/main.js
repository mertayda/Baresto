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



// Gsap Animations 

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".special-tastes-whole").forEach(elem => {
    gsap.to(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });
  });




gsap.to(".favourite-coffee-title",{
  y: "-100%",
  opacity: 1,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".favourite-coffee-title",
    start: "top 80%",
    toggleActions: "play none none none"
  }
})
  





gsap.to(".favourite-menu-container", {
  scrollTrigger: {
    trigger: ".favourite-menu-container",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
});



gsap.to(".footer-list",{
   y: 0,         
  opacity: 1,    
  duration: 1,  
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".footer-list",
    start: "top 90%",  
    toggleActions: "play none none none"
  }
})


gsap.to(".snacks-container-menu", {
  scrollTrigger: {
    trigger: ".snacks-container-menu",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
});


gsap.to(".favourite-food-title", {
  y: "-50%",        
  opacity: 1,       
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".favourite-food-title",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".review-slide", {
  x: 0,          
  opacity: 1,     
  duration: 1,    
  stagger: 0.15, 
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".review-wrapper",  
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
