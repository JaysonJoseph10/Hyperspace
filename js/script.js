$(function(){
  $('nav.sidenav a.first').addClass('active')

  $('#landing').scrollex({
    mode: 'middle',
    enter: function() {
      $('nav.sidenav a.first').addClass('active')
  },
    leave: function() {
      $('nav.sidenav a.first').removeClass('active')
    }
  })
  $('#who-we-are').scrollex({
    mode: 'middle',
    enter: function() {
      // $('nav.sidenav a').removeClass('active')
      $('nav.sidenav a.second').addClass('active')
    },
    leave: function() {
      $('nav.sidenav a.second').removeClass('active')
    }
  })
  $('#what-we-do').scrollex({
    mode: 'middle',
    enter: function() {
      // $('nav.sidenav a').removeClass('active')
      $('nav.sidenav a.third').addClass('active')
    },
    leave: function() {
      $('nav.sidenav a.third').removeClass('active')
    }
  })
  $('#get-in-touch').scrollex({
    mode: 'middle',
    enter: function() {
      $('nav.sidenav a.fourth').addClass('active')
    },
    leave: function() {
      $('nav.sidenav a.fourth').removeClass('active')
    }
  })

  $('nav.sidenav a').on('click', function(event) {
    $('nav.sidenav a').removeClass('active')
    $(this).addClass('active')

    if (this.hash !== '') {
      var id = this.hash
      event.preventDefault()

      $('html').animate({
        scrollTop: $(id).offset().top
      }, 1000, function(){
        window.location.hash = id
      })
    }
  })
})
