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

document.addEventListener("DOMContentLoaded", function(event) { 
  handleTyping ();
});
