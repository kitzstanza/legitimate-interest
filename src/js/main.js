'use strict'

import { strict } from 'assert'
import gsap from 'gsap'

var contentful = require('contentful')
const client = contentful.createClient({
  accessToken: '_XilaPWW22UdM7QLIu1BMYzxedvYDVWlPc2nk7zTk6U',
  environment: 'master',
  space: '61oa9zxo04kg',
})

// import Alpine from "alpinejs"
// window.Alpine = Alpine
// Alpine.start()

client
  .getEntries({
    content_type: 'homePage',
  })
  .then((response) => console.log(response.items.fields.heroVideo))
  .catch(console.error)

//////////////////

//////////////////

// Scrollto function

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

// Mobile Menu

const menuBtn = document.getElementById('menu-btn')
const mobilebg = document.getElementById('mobile-menu-bg')
const mobilenav = document.getElementById('mobile-nav')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  mobilebg.classList.toggle('flex')
  mobilenav.classList.toggle('flex')
  mobilebg.classList.toggle('hidden')
  mobilenav.classList.toggle('hidden')
})

// let sizeState

// // function checkSize() {
// //   if (sizeState === "") {
// //     document.querySelector("btnSelected")
// //     sizeState = size
// //     console.log(sizeState)
// //   }
// // }

// document.getElementById("btnSizeID").addEventListener("click", function () {
//   alert("WORKING")
//   if (sizeState === "") {
//     document.querySelector("btnSize")
//     sizeState = size
//     console.log(sizeState)
//   }
// })
// console.log("WORKING")
