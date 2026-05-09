console.log("JavaScript is working!")

const button = document.getElementById("helloBtn")
const message = document.getElementById("message")
const Closebutton = document.getElementById("CloseBtn")

button.addEventListener("click", function() {
    message.textContent = "Hello from JavaScript! 👋"
  })
  
  Closebutton.addEventListener("click", function() {
    message.textContent = ""
  })