const closeBtn = document.querySelector(".close-btn")
const successCard = document.querySelector(".success-card")

closeBtn.addEventListener("click", () => {
    successCard.style.display = "none"
})

document.querySelectorAll("#error").forEach(error => error.style.display = "none")


document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    

    if (!validate()) {
        return
    }

    try {
        const result = await sendingData();
        console.log("Success:", result);
        
      
        document.querySelector(".success-card").style.display = "block";
        
      
        document.querySelector("form").reset();
        
    } catch (error) {
        console.error("Failed:", error.message);
      
    }
})

async function sendingData() {
    const form = document.querySelector("form")
    let formData = new FormData(form)
    
   
    let data = {
        name: formData.get("details"), 
        email: formData.get("email"),
        phone: formData.get("phone"),
        date: formData.get("date"),
        guest: formData.get("guest")
    }

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

     
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const replay = await response.json()
        console.log(replay)
        return replay

    } catch (error) {
        console.log(error, "API error")
        throw error
    }
}

function validate() {
    document.querySelectorAll("#error").forEach(error => error.style.display = "none")

    let isValid = true

    // Validate date
    let date = document.querySelector("#date").value.trim()
    if (!date) {
        showError(".dateError")
        isValid = false
    } else {
        let chosenDate = new Date(date)
        let now = new Date()
       
        now.setHours(0, 0, 0, 0) 
        chosenDate.setHours(0, 0, 0, 0)
        
        if (chosenDate < now) {
            showError(".dateError")
            isValid = false
        }
    }

    // Validate name
    const name = document.querySelector("#details-data").value.trim()
    if (!name || name.length < 3) {
        showError(".nameError")
        isValid = false
    }

    // Validate email
    const email = document.querySelector("#email").value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !email) {
        showError(".emailError")
        isValid = false
    }

    // Validate phone
    const phone = document.querySelector("#phone").value.trim()
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.length < 10) {
        showError(".phoneError")
        isValid = false
    }

    // Validate guest
    const guest = document.querySelector("#guest").value
    if (!guest) {
        showError(".guestError")
        isValid = false
    }

  
    return isValid
}

function showError(errorId) {
    let error = document.querySelector(errorId)
    if (error) {
        error.style.display = "block"
    }
}

function hideError(errorId) {
    let error = document.querySelector(errorId)
    if (error) {
        error.style.display = "none"
    }
}

// Blur event validations
document.querySelectorAll("input, select").forEach((field) => {
    field.addEventListener("blur", () => {
        blurValidation(field)
    })
})


function blurValidation(field) {
    
    if (field.id === "details-data") {
        let nameInput = field.value.trim()
        if (!nameInput || nameInput.length < 3) {
            showError(".nameError")
            return false
        } else {
            hideError(".nameError")
            return true
        }
    }

    if (field.id === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailInput = field.value.trim()
        if (!emailRegex.test(emailInput)) {
            showError(".emailError")
            return false
        } else {
            hideError(".emailError")
            return true
        }
    }

    if (field.id === "phone") {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        let phoneInput = field.value.trim()
        if (!phoneRegex.test(phoneInput) || phoneInput.length < 10) {
            showError(".phoneError")
            return false
        } else {
            hideError(".phoneError")
            return true
        }
    }

    if (field.id === "date") {
        const dateInput = field.value
        if (!dateInput) {
            showError(".dateError")
            return false
        }

        let chosenDate = new Date(dateInput)
        let now = new Date()
       
        now.setHours(0, 0, 0, 0)
        chosenDate.setHours(0, 0, 0, 0)
        
        if (chosenDate < now) {
            showError(".dateError")
            return false
        }

        hideError(".dateError")
        return true
    }

    if (field.id === "guest") {
        const guestInput = field.value
        if (!guestInput) {
            showError(".guestError")
            return false
        } else {
            hideError(".guestError")
            return true
        }
    }

    if (field.id === "time") {
        const timeInput = field.value
        if (!timeInput) {
            showError(".timeError")
            return false
        } else {
            hideError(".timeError")
            return true
        }
    }
}

