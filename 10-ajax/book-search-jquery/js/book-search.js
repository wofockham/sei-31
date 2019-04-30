$(document).ready(function () {

  $('form').on('submit', function (event) {
    event.preventDefault(); // Disable navigation to a new page.

    const title = $('#book_title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;

    // Deferred syntax (similar to the Promises syntax)
    $.ajax(url).done(function (data) {
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
      $('#cover').attr('src', cover);
    });
  });

});
