// collab footer form spree
function showPopupMessage(message) {
    console.log("Showing popup message:", message);
  
    const popupMessage = document.createElement("div");
    popupMessage.className = "popup-message";
    popupMessage.textContent = message;
  
    document.body.appendChild(popupMessage);
  
    setTimeout(() => {
      console.log("Removing popup message");
      popupMessage.style.display = "none";
      document.body.removeChild(popupMessage);
    }, 3000);
  }
  
  function submitEmail() {
    console.log("Submitting email...");
  
    const emailInput = document.getElementById("emailInput");
    const formData = new FormData();
    formData.append("email", emailInput.value);
  
    fetch("https://formspree.io/f/mzbldrae", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email submitted successfully!");
          // Show the pop-up message
          showPopupMessage("Collaboration email submitted, I'll be in touch as soon as possible!");
  
          // Reset the input value after successful submission
          emailInput.value = "";
        } else {
          // Handle error
          console.log("Error submitting email");
          alert("Oops! Something went wrong. Please try again later.");
        }
      })
      .catch((error) => {
        // Handle network errors
        console.log("Network error occurred:", error);
        alert("Network error occurred. Please try again later.");
      });
  }

  // RESUME 

  document.querySelector('.download-button').addEventListener('click', function() {
    document.querySelector('.resume-link').click();
  });
  


