$(document).ready(function () {
  $('#name').on('keyup', function () {
    const name = $('#name').val();
    $('header h1').html(`Welcome ${ name }`);
  }).on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  });
});
