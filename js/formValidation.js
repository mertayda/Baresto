document.querySelectorAll("#error").forEach(error => error.style.display = "none")


document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	if (validate()) {
		sendForm()

	} else {

	}

})

function validate() {
	document.querySelectorAll("#error").forEach(error => error.style.display = "none")

	let isvalid = true


	// validate  date

	let date = document.querySelector("#date").value;
	if (!date) {
		isvalid = false
	} else {
		let chosenDate = new Date(date)
		let now = new Date()
		if (chosenDate < now) {
			showError(".dateError")
			isvalid = false
		}


	}


	//  validate name
	const name = document.querySelector("#details-data").value.trim()
	if (!name || name.length === 0) {
		showError(".nameError")
		isvalid = false

	}




	//validate email
	const email = document.querySelector("#email").value.trim()
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email) || !email) {
		showError(".emailError")
		isvalid = false

	}

	//validate phone
	const phone = document.querySelector("#phone").value.trim()
	const phoneRegex = /^[\d\s\-\+\(\)]+$/;
	if (!phoneRegex.test(phone) || phone.length < 10) {
		showError(".phoneError")
		isvalid = false

	}

	const textarea = document.querySelector("#messeage")
	if (!textarea) {

		isvalid = false

	}

	return isvalid

}


function showError(errorId) {
	let test = document.querySelector(errorId)
	test.style.display = "block"

}



function validate(){
	document.querySelectorAll("input, select").forEach(pick => pick.addEventListener("blur", () => {
				test(field)

	}))
}


function test(field){
	if(field.classList.contains("details")){
		 let am  = document.querySelector(".nameError")
		 am.style.display = "block"
	}
		
	
}

validate()