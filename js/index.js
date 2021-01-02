
const wrapper = document.querySelector(".wrapper")
const hamburger = document.querySelector(".hamburger-menu")

hamburger.addEventListener("click", () => {
  wrapper.classList.toggle("active")
})
