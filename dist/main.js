// Mobile Menu

const menuBtn = document.getElementById("menu-btn")
const mobilebg = document.getElementById("mobile-menu-bg")
const mobilenav = document.getElementById("mobile-nav")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open")
  mobilebg.classList.toggle("flex")
  mobilenav.classList.toggle("flex")
  mobilebg.classList.toggle("hidden")
  mobilenav.classList.toggle("hidden")
})

// Homepage production section

//dupes
const prod1 = document.getElementById("product-1")
const prod2 = document.getElementById("product-2")

const duper = function (containerDiv, elementDiv) {
  console.log(elementDiv.clientWidth)
  for (
    let i = 0;
    i < Math.round(containerDiv.offsetParent / elementDiv.clientWidth) + 1;
    i++
  ) {
    console.log("duped " + i)
  }
}

window.addEventListener("load", duper(prod1.offsetParent, prod1))
