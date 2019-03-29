$(document).ready(function () {
  $('#name').on('keyup', function () {
    const name = $('#name').val();
    $('header h1').html(`Welcome ${ name }`);
  }).on('focus', function () {
    // It's better to add or remove styles than manipulate CSS in JS.
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  });

  // Change the opacity of the image based on the mouse position
  const $bill = $('img'); // Cache the image to prevent having to query for it repeatedly.
  $(window).on('mousemove', function (event) {
    const opacity = event.clientY / window.innerHeight;
    $bill.css('opacity', opacity);
  });

  const randomColor = function () {
    return Math.random() * 255;
  }

  const $body = $('body');
  $(window).on('mousemove', function (event) {
    const bgColor = `rgb(${ randomColor() }, ${ randomColor() }, ${ randomColor() })`;
    $body.css('background-color', bgColor);
  });
});
