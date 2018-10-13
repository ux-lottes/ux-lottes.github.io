function handleTyping () {
 var options = {
          strings: [ "Frontend Developer", "UI / UX Designer"],
              typeSpeed: 70,
              starDelay: 250,
              backDelay: 600,
              loop: false,
              showCursor: true,
              cursorChar: "|"
        }
  var typed = new Typed(".element", options);
}

$('document').ready(function () {
 var type = document.getElementsByClassName('element');
 console.log(type);
  if (type.length) {
   handleTyping (); 
  }
  var trigger = $('#hamburger'),
      isClosed = true,
      nav = $(".full-screen-nav");

  trigger.click(function () {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed == false) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = true;
      nav.removeClass('fadeIn');
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      nav.addClass('fadeIn');
      isClosed = false;
    }
  }

});

/* soft scroll */
$(function() {
  $('.scroll-down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
