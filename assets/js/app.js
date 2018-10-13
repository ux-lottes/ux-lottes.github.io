function handleTyping () {
 var options = {
          strings: ["UI / UX Designer", "Frontend Developer"],
              typeSpeed: 50,
              starDelay: 200,
              backDelay: 600,
              loop: true,
              showCursor: true,
              cursorChar: "|"
        }
  var typed = new Typed(".element", options);
}

function burgerTime() {
  if (isClosed == true) {
    trigger.removeClass('is-open');
    trigger.addClass('is-closed');
    isClosed = false;
  } else {
    trigger.removeClass('is-closed');
    trigger.addClass('is-open');
    isClosed = true;
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  handleTyping ();    
  var trigger = $('#hamburger'),
     isClosed = true;
 trigger.click(function () {
      burgerTime();
  });
});

/* soft scroll */
$(function() {
  $('.scroll-down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
