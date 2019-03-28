const $links = $('li a');

// TODO: $link.each()
for (let i = 0; i < $links.length; i++) {

  const $link = $( $links[i] ); // Turn the vanilla DOM node back into a jQuery object
  const url = $link.attr('href');

  const thumbnailURL = youtube.generateThumbnailUrl( url );

  // Chaining
  const $thumbnail = $('<img>').attr('src', thumbnailURL);

  $link.append($thumbnail);

}

// $('li a').each(function () {
//   $(this).append($('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href') )));
// });
