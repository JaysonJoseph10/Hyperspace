$(document).ready(function(){
  $('section#who-we-are').scrollex({
    enter: function() {
      console.log(1)
      $('nav.sidenav a').addClass('active')
    }
  }, {
    leave: function() {
      $(this).removeClass('active')
    }
  })
  });
});
