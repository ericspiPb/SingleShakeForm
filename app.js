function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down")

  arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
      const input = arrow.previousElementSibling
      const parent = arrow.parentElement
      const nextElm = parent.nextElementSibling

      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextElm)
      } else if(input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextElm)
      } else if (input.type === "password" && validateUser(input) ){
        nextSlide(parent, nextElm)
      } else {
        console.log(parent)
        parent.style.animation = "shake 0.1s ease"
      }

      parent.addEventListener("animationend", () => parent.style.animation = "")
    })
  })
}

function validateUser(input) {
  if (input.value.length < 6) {
    console.log("not engought characters")
    error("rgb(189, 88, 88)")
  } else {
    error("rgb(88, 189, 130)")
    return true
  }
}

function validateEmail(input) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (validation.test(input.value)) {
    error("rgb(88, 189, 130)")
    return true
  } else {
    error("rgb(189, 88, 88)")
  }
}

function nextSlide(previousElm, nextElm) {
  previousElm.classList.add("inactive")
  nextElm.classList.remove("inactive")
  nextElm.classList.add("active")
}

function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();