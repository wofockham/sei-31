$(document).ready(() => {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation:
  // $('parent').on('event', 'child', ...)
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected'); // Deselecting any previous swatch selections.
    $(this).addClass('selected');
  });

  // Event delegation for memory efficiency.
  $('.canvas').on('mouseover', '.pixel', function (event) {
    if (event.shiftKey === false) {
      return;
    }
    const color = $('.swatch.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
