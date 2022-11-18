const textm1= document.querySelector('.img-box-text .m1')
textm1.innerHTML=textm1.innerText.split("").map(
  (char,i)=>
  `<span style="transform:rotate(${11*i}deg)">${char}</span>`
).join("")
const textm2= document.querySelector('.img-box-text .m2')
textm2.innerHTML=textm2.innerText.split("").map(
  (char,i)=>
  `<span style="transform:rotate(${11*i}deg)">${char}</span>`
).join("")
const textc1= document.querySelector('.img-box-text .c1')
textc1.innerHTML=textc1.innerText.split("").map(
  (char,i)=>
  `<span style="transform:rotate(${11*i}deg)">${char}</span>`
).join("")
const textc2= document.querySelector('.img-box-text .c2')
textc2.innerHTML=textc2.innerText.split("").map(
  (char,i)=>
  `<span style="transform:rotate(${11*i}deg)">${char}</span>`
).join("")
const textc3= document.querySelector('.img-box-text .c3')
textc3.innerHTML=textc3.innerText.split("").map(
  (char,i)=>
  `<span style="transform:rotate(${11*i}deg)">${char}</span>`
).join("")

