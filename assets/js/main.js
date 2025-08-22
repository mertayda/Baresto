document.addEventListener("DOMContentLoaded", async () => {

    async function load() {
        const partials = document.querySelectorAll('[data-get]')

        await Promise.all([...partials].map(async (part) => {
            let data = part.getAttribute("data-get")
            if (!data) return;
            try {
                let con = await fetch(data, {
                    cache: "no-store"
                })
                if (!con.ok) {
                    throw new Error(` ${data} => ${con.status}`)
                }

                let context = await con.text()
                part.innerHTML = context


            } catch (error) {
                console.log("Error encounter")
            }


        }))

    }



    await load()




    const carousel = document.querySelector(".fullpage-carousel");
    const slidesWrapper = document.querySelector(".carousel-slides-wrapper");
    const slides = document.querySelectorAll(".carousel-slide");
    const slideContent = document.querySelectorAll(".slide-content");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const hamburgerBtn = document.querySelector(".hamburger-menu-button")
    const navMenu = document.querySelector(".nav-menu-mobile");

    const dpMobile = document.querySelector(".dropdown-mobile-link")
    const dpContent = document.querySelector(".mobile-dropdown")
    const arrow = document.querySelector(".arrow")




    dpMobile?.addEventListener("click", function(e) {
      e.preventDefault()
        this.classList.toggle("is-open")
        dpContent?.classList.toggle("showup")
    })




    hamburgerBtn?.addEventListener("click", () => {
        navMenu?.classList.toggle("active");
    })



    let currentIndex = 0;
    let totalIndex = slides.length

    let slideTimer;

    const checkCarousel = slidesWrapper && carousel &&  slides.length > 0


    function updateCarousel() {
      if(!checkCarousel) return;

        if (currentIndex > totalIndex - 1) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalIndex - 1
        }

        slidesWrapper.style.transition = "transform 0.5s ease-in-out";
        slidesWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
        slideContent.forEach((item) => {
            item.style.transition = "transform 0.5s ease-in-out";
          

        })


    }




    function nextSlide() {
        currentIndex++;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex--;
        updateCarousel();
    }


    nextBtn?.addEventListener("click", () => {
          if(!checkCarousel) return;
        nextSlide();
        autoSlide()

    })

    prevBtn?.addEventListener("click", () => {
          if(!checkCarousel) return;
        prevSlide();
        autoSlide()


    })

    function stopSlide() {
        clearInterval(slideTimer);
    }


    function autoSlide() {
          if(!checkCarousel) return;
        stopSlide();
        slideTimer = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    if(checkCarousel){
       autoSlide()
    }
   




if(window.gsap && window.ScrollTrigger){ 
  
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




    gsap.to(".favourite-coffee-title", {
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



    gsap.to(".footer-list", {
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
} else {

}
 
   

})