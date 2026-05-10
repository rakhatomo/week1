console.log("JavaScript is working!")

const button = document.getElementById("helloBtn")
const Closebutton = document.getElementById("CloseBtn")
const introBlock = document.getElementById("introBlock")
const message = document.getElementById("message")
const morePrompt = document.getElementById("morePrompt")
const funFactBtn = document.getElementById("funFactBtn")
const funFact = document.getElementById("funFact")
const detailBtn = document.getElementById("detailBtn")
const detail = document.getElementById("detail")

function resetIntro() {
  introBlock.classList.add("hidden")
  funFactBtn.classList.add("hidden")
  funFact.classList.add("hidden")
  detailBtn.classList.add("hidden")
  detail.classList.add("hidden")
  message.textContent = ""
  morePrompt.textContent = ""
  funFact.textContent = ""
  detail.textContent = ""
}

button.addEventListener("click", function () {
  introBlock.classList.remove("hidden")
  message.textContent = "Hello, I'm a dad with 1 daughter "
  morePrompt.textContent =
    "Want to know more about myself? Click the button below."
  funFactBtn.classList.remove("hidden")
  funFact.classList.add("hidden")
  detailBtn.classList.add("hidden")
  detail.classList.add("hidden")
  funFact.textContent = ""
  detail.textContent = ""
})

funFactBtn.addEventListener("click", function () {
  funFact.textContent =
    "I live in Jakarta, Pondok Labu"
  funFact.classList.remove("hidden")
  detailBtn.classList.remove("hidden")
})

detailBtn.addEventListener("click", function () {
  detail.textContent =
    "Beside trying to build my own product, I also build my own home and it will be ready by January 2027. Wish me Luck!"
  detail.classList.remove("hidden")
})

Closebutton.addEventListener("click", function () {
  resetIntro()
})
