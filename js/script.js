$(document).ready(function(){
  $('nav.sidenav a').scrollex({
    enter: function() {
      $(this).addClass('active')
    }
  }, {
    leave: function() {
      $(this).removeClass('active')
    }
  })


  $("nav.sidenav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault()
      var hash = $(this.hash)

      $('#container').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash
      });
    }
    return false
  });
});
