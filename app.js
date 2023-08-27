let body = document.querySelector("body")
let crsr = document.querySelector("#cursor")





body.addEventListener("mousemove" , function(dets){
    crsr.style.opacity  = "1"
  crsr.style.left = dets.x - 10 + "px"
  crsr.style.top = dets.y  - 12 + "px"
})