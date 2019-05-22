$(document).ready(() => {
  // Parallax //////////////////////////////////////////////////////////////////
  // Caching
  const $bill = $('.bill-js');
  const $body = $('body');

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop * 0.5);
    $body.css('background-position-y', -scrollTop / 3);
  });

  // Bubble ////////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    const {pageX:x, pageY:y} = e;

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble" />').css({
      top: y,
      left: x,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo('body');

    // Custom animation:
    // $bubble persists for each separate bubble in a closure.
    $bubble.animate({top: -200}, 4000, () => {
      // Clean up after ourselves.
      $bubble.remove();
    });
  });
});
