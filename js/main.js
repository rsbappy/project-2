

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      autoplay:{
	delay:2500,
    },
    // Navigation arrows

  
    // And if we need scrollbar
   
  });
 

  // header  scoll

  let nav = document.querySelector(".navbar");
  window.onscroll = function (){
    if (document.documentElement.scrollTop > 50){
      nav.classList.add("header-scrolled");
    }else{
      nav.classList.remove("header-scrolled");
    }
  }

  //nav hide
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");
  navBar.forEach(function(a){
    a.addEventListener("click", function(){
      navCollapse.classList.remove("show");
    })
  })