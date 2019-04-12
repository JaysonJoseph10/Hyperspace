$(function(){
  $('nav.sidenav a.first').addClass('active')
  $('#landing').scrollex({
    top: '-1px',
    bottom: '1px',
    enter: function() {
      $('nav.sidenav a.first').addClass('active')
    },
    leave: function() {
      $('nav.sidenav a.first').removeClass('active')
    }
  })
  $('#who-we-are').scrollex({
    mode: 'middle',
    // top: '1px',
    // bottom: '1px',
    enter: function() {
      $('nav.sidenav a.first').removeClass('active')
      $('nav.sidenav a.second').addClass('active')
    },
    leave: function() {
      $('nav.sidenav a.second').removeClass('active')
    }
  })
  $('#what-we-do').scrollex({
    mode: 'middle',
    // top: '1px',
    // bottom: '1px',
    enter: function() {
      $('nav.sidenav a').removeClass('active')
      $('nav.sidenav a.third').addClass('active')
    },
    leave: function() {
      $('nav.sidenav a.third').removeClass('active')
    }
  })
  
});
var section1 = document.querySelector('#who-we-are')

section1.getBoundingClientRect()
