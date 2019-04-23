/* ========================================================
                       Menu function
  ========================================================*/
jQuery(document).ready(function($) {
  $(".navbar__container--trigger ").click(function() {});

  //show menu
  $(".navbar__container--trigger").on("click", function(event) {
    event.preventDefault();
    $("#main-nav").addClass("is-visible");
    $(".navbar__content--a--1").addClass("in--1");
    $(".navbar__content--a--2").addClass("in--2");
    $(".navbar__content--a--3").addClass("in--3");
    $(".navbar__content--a--4").addClass("in--4");
    $(".navbar__container--trigger").css("display", "none");
    $(".header__imagebox").css("display", "none");
    $("#content").css("opacity", "0.3");
  });
  //close menu
  $(".cd-close-menu").on("click", function(event) {
    event.preventDefault();
    $("#main-nav").removeClass("is-visible");
    $(".navbar__content--a--1").removeClass("in--1");
    $(".navbar__content--a--2").removeClass("in--2");
    $(".navbar__content--a--3").removeClass("in--3");
    $(".navbar__content--a--4").removeClass("in--4");
    $(".navbar__container--trigger").css("display", "block");
    $(".header__imagebox").css("display", "block");
    $("#content").css("opacity", "1");
    $(".ion-logo-apple").removeClass("goleft--apple");
  });
});

// Smooth scroll for the menu and links with .scrollto classes
$('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, '');
      }
    }
  });

 