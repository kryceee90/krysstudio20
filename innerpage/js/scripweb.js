
$(document).ready(function(){

  // TOP
  $(window).scroll(function() {
    
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });

//   
$(window).load(function(){  
    for (var i = 0; i < 50; i++) {
      var names = ['x1','x2','y1','y2'],
          name = names[Math.floor(Math.random() * names.length)];
      $('.circles').append('<header><div class="circle-container c'+i+'"><div class="circle i'+ i +'"></div></div><header>');
      $('.c'+i).css({
        'animation': 'z 5s .'+ i +'s linear infinite'
      });
      $('.i'+i).css({
        'animation': name + ' 7.5s .'+ i +'s linear infinite'
      });
    }
  });
  });
  