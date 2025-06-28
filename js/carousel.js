const allGalery = document.querySelectorAll(".showcase-products a")
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modal-img");
const caption = document.querySelector(".caption");
const closeBtn = document.getElementById("close-btn");
const next = document.getElementById("next");
const previous = document.getElementById("previous");


let showCount =  0;

const bigImages = Array.from(allGalery).map((image) => {
    const img = image.querySelector("img");
    return {
        largeSrc : image.dataset.largeSrc,
        alt:img.alt
    }


} )


function changeImage(){
   modalImage.src = bigImages[showCount].largeSrc;
   modalImage.alt = bigImages[showCount].alt;
   caption.textContent = `${showCount} of ${bigImages.length} - ${modalImage.alt}`
}




allGalery.forEach((item,index) => {
       
        item.addEventListener("click",(e) => {
        e.preventDefault();
        showCount = index;
        modal.classList.add("active"); 
        changeImage();
      
        })
})



function closeButton(){

 modal.classList.remove("active");
  document.body.style.overflow = 'auto';
}


function nextButton(){
        if(showCount < bigImages.length - 1) {
        showCount++;
    } else{
        showCount = 0;
    }

    changeImage();
}



function previousButton(){
    if(showCount > 0) {
        showCount--;
    }  else{
        showCount = bigImages.length - 1;
    }
    

    changeImage();
}

closeBtn.addEventListener("click", closeButton)
next.addEventListener("click",  nextButton)
previous.addEventListener("click", previousButton)





