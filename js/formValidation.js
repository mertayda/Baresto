const closeBtn = document.querySelector(".close-btn")
const  successCard = document.querySelector(".success-card")


closeBtn.addEventListener("click",() => {
	  successCard.style.display = "none"
})


document.querySelectorAll("#error").forEach(error => error.style.display = "none")




document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	validate()
	
		
})

function validate() {
	document.querySelectorAll("#error").forEach(error => error.style.display = "none")

	let isValid = true


	// validate  date

	let date = document.querySelector("#date").value.trim()
	if (!date) {
		isValid = false
	} else {
		let chosenDate = new Date(date)
		let now = new Date()
		if (chosenDate < now) {
			showError(".dateError")
			isValid = false
		}


	}


	//  validate name
	const name = document.querySelector("#details-data").value.trim()
	if (!name || name.length === 0) {
		showError(".nameError")
		isValid = false

	}




	//validate email
	const email = document.querySelector("#email").value.trim()
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email) || !email) {
		showError(".emailError")
		isValid = false

	}

	//validate phone
	const phone = document.querySelector("#phone").value.trim()
	const phoneRegex = /^[\d\s\-\+\(\)]+$/;
	if (!phoneRegex.test(phone) || phone.length < 10) {
		showError(".phoneError")
		isValid = false

	}

	
 if(isValid){
	  	const success = document.querySelector(".success-card")
		success.style.display = "block"
 }
	

}





function showError(errorId) {
	let  error = document.querySelector(errorId)
	error.style.display = "block"

}


function hideError(errorId){
  
  let  error = document.querySelector(errorId)
	error.style.display = "none"

}


// blur event validations



document.querySelectorAll("input, select").forEach((field) => {
	 field.addEventListener("blur", () => {
		  blueValidation(field)
	 })
		

})



		
function blueValidation(field){


   if(field.id === "details-data"){
	   let  nameInput = field.value.trim()
	   if(!nameInput || nameInput.length < 3){
		  	showError(".nameError")
			return false
			 
	   } else{
		
			hideError(".nameError")
			return true
	   }
	 
   }



   if(field.id === "email"){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	 let emailInput = field.value.trim()
	 if(!emailRegex.test(emailInput)){
		showError(".emailError")
		return false
	 } else{
		hideError(".emailError")
		return true
	 }
	 
   }



if(field.id === "phone"){
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
   let phoneInput = field.value
   if(!phoneRegex.test(phoneInput)){
	 showError(".phoneError")
	 return false
   } else{
	hideError(".phoneError")
	return true
   }
}


 if(field.id  === "date"){
	 const dateInput = field.value
	 if(!dateInput  ){
		showError(".dateError")
		return false
	
	 } 
	 
	 let chosenDate = new Date(dateInput)
	 let now = new Date()
	 if(chosenDate < now){
		showError(".dateError")
		return false
	 }

	 hideError(".dateError")
   return true


 }


  if(field.id === "guest"){
	 const guestInput = field.value
	 if(!guestInput){
		showError(".guestError")
		return false
	 } else{
		hideError(".guestError")
		return true
	 }
  }
   

  if(field.id === "time"){
	const timeInput = field.value
	if(!timeInput){
		showError(".timeError")
		return false
	} else{
		hideError(".timeError")
		return true
	}
  }
} 



