import gsap from "gsap"

var contentful = require("contentful")
const client = contentful.createClient({
  accessToken: "_XilaPWW22UdM7QLIu1BMYzxedvYDVWlPc2nk7zTk6U",
  space: "61oa9zxo04kg",
})

// import Alpine from "alpinejs"
// window.Alpine = Alpine
// Alpine.start()

client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    console.log(entry.fields)
  })
})

// const asset = client
//   .getAsset("4LmmVuPr4WqGuD5e3SFB5z")
//   .then(asset => console.log(asset.fields.file.url))

// Scrollto function

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  alert("found!")
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})
