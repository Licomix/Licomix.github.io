window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$(document).ready(function(){
	$("nav li a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 1800);
    });
});
document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });
