
(function ($)
{ "use strict"



//2. sticky And Scroll UP 
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 55) {
      $(".header-sticky").removeClass("sticky-bar");
      $('#back-top').fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $('#back-top').fadeIn(500);
    }
  });





  //window.onscroll = function() {scrollFunction()};

  /*
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("header-area2")[0].style.padding = "0px";
    document.getElementsByClassName("header-inner")[0].classList.remove("bottom-border");
    document.getElementsByClassName("bars")[0].classList.add("bottom-border");

  } else {
    document.getElementsByClassName("header-area2")[0].style.padding = "3vh 0vh 3vh 0vh";
    document.getElementsByClassName("header-inner")[0].classList.add("bottom-border");
    document.getElementsByClassName("bars")[0].classList.remove("bottom-border");
  }
} 

  */

  
  // Counter

  const counters = document.querySelectorAll('.counter');
  console.log(counters)
  //const counter2 = document.querySelectorAll('.counter');
  //const counter3 = document.querySelectorAll('.counter');
  //const counter4 = document.querySelectorAll('.counter');

  const speed = 18; // The lower the slower

  $('#facts').hover(
    function(){
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / target;

      // console.log(inc);
      // console.log(count);

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + inc;
        // Call function every ms
        setTimeout(updateCount, 80);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

  $('#read-more').hover(

  

    function () {
      $(".who-block").addClass(" visible animate__delay-1s animate__animated animate__fadeInRight");
    },
  );



// Scroll Up
  $('#back-top a').on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  

// Forms Spree




/* 6. Nice Selectorp  */
var nice_Select = $('select');
  if(nice_Select.length){
    nice_Select.niceSelect();
  }

/* 7. data-background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


/* Info Banner */
$(window).load( function() {

setTimeout( function() {

  var alerted = localStorage.getItem('alerted') || '';

  if (alerted != 'yes') {
    $("#infobar").slideToggle("fast");
  }
 
  //$("body").addClass("slider");
}, 5);

$("#close").click( function() {
  $("#infobar").slideToggle("fast");
  $("body").removeClass("slider");

  localStorageAdd();

  return false;
});

$("#view_message").click( function() {
  $("#infobar").slideToggle("fast");
  $("body").removeClass("slider");

  $('html,body').animate({
    scrollTop: $(".covid-update").offset().top},
    'slow');

  localStorageAdd();

  return false;
});


});

  function localStorageAdd(){  

  var alerted = localStorage.getItem('alerted') || '';
  if (alerted != 'yes') {
    localStorage.setItem('alerted','yes');
  }

  }




/* 11. Datepicker */
$('#datepicker1').datepicker();

// 12. Time Picker
$('#timepicker').timepicker();



  $("#header").load("header.html", function () {


      $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    //contain: true,
    freeScroll: true,
    wrapAround: true,
    imagesLoaded: true,

  });

  
  
  const header = document.getElementsByClassName('header')[0];
  const icon = document.getElementsByClassName('icon-container')[0];
 
  console.log(header);
  console.log(icon);

  icon.onclick = function () {
    header.classList.toggle('menu-open');
  }



});


/*
let flkty = new $('.main-carousel-2').flickity({
  // options
  cellAlign: 'left',
  //contain: true,
  freeScroll: true,
  wrapAround: true,
  imagesLoaded: true,

});
*/






})(jQuery);
