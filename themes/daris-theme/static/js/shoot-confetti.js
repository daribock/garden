// Set a cookie to indicate that confetti has been shown
function setConfettiCookie() {
  localStorage.setItem("confettiShown", "true")
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if confetti has been shown using the cookie
  if (!localStorage.getItem("confettiShown")) {
    // Call confetti function
    confetti()

    // Set the cookie to indicate that confetti has been shown
    setConfettiCookie()
  }
})

const button = document.querySelector(".confetti-button")

button.addEventListener("click", () => {
  confetti()
})
