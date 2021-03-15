// const cursor = document.querySelector(".cursor");
// var timeout;
// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;
//
//   cursor.style.top = y + "px";
//   cursor.style.left = x + "px";
//   cursor.style.display = "block";
//
//   //cursor effects when mouse stopped
//   function mouseStopped(){
//     cursor.style.display = "none";
//   }
//   clearTimeout(timeout);
//   timeout = setTimeout(mouseStopped, 1000);
// });
//
// //cursor effects when mouseout
// document.addEventListener("mouseout", () => {
//   cursor.style.display = "none";
// });


$(document).ready(function(){
  $('.evtns-slider').slick({
    slidesToShow:3,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:1,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});


$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:1,
    infinite:true,
    autoplay:true,
    pauseOnFocus:true,
    pauseOnHover:true,
    swipe:true,
    TouchMove:true,
    arrows:false,
    responsive:[
      {
        breakpoint: 1250,
        settings:{
          slidesToShow:1,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 922,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }, {
        breakpoint: 480,
        settings:{
          slidesToShow:1,
          arrows:false,
          autoplay:true
        }
      }
    ]
  });
});




$(document).ready(function () {
  $('.language').click(function(evt) {
    evt.preventDefault();
    $('.sub-lang').slideToggle(300);
    $(this).toggleClass('close');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click',() => {
  if (nav.className != 'active') {nav.className = 'active';}
    else {nav.className = '';}
});




$(window).on("scroll",function(){
if($(window).scrollTop()){
$('header').addClass('black');
}
else {
$('header').removeClass('black');
}
});

$('.circle-plus').on('click', function(){
  $(this).toggleClass('opened');
});




$(document).ready(function() {
  $('.spoiler-title').click(function(event) {
    if($('.spoiler').hasClass('one')){
      $('.spoiler-title').not($(this)).removeClass('active');
      $('.ghost-block').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })
})
