let atTop = true;
let scrollPosition = 0;

document.addEventListener("scroll",function(){
  scrollPosition = window.scrollY;
  if(atTop){
    atTop = false;
    document.querySelector(".top-button").classList.add("un-hide");
  }
  if(scrollPosition <= 50){
    atTop = true;
    document.querySelector(".top-button").classList.remove("un-hide");
  }
})

// document.addEventListener("click",function(){
//   document.querySelector(".top-button").classList.remove("un-hide");
//   atTop = true;
// })
