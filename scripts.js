console.log('...loaded');

$(function(){
  $('#about-link').on('click', function(){
    $('.about').slideDown();
    $('.projects').slideUp();
    $('.contact').slideUp();
  });
  $('#contact-link').on('click', function(){
    $('.contact').slideDown();
    $('.projects').slideUp();
    $('.about').slideUp();
  });
  $('#portfolio-link').on('click', function(){
    $('.projects').slideDown();
    $('.about').slideUp();
    $('.contact').slideUp();
  });
});
