const $links = $('li a');

const thumbnailify = function ($a) {
  const url = $a.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl( url );
  const $thumbnail = $('<img>').attr('src', thumbnailURL);
  $a.append($thumbnail);

  $thumbnail.on('click', function (event) {
    event.preventDefault(); // Stay on the same page -- don't follow the link

    const embedURL = youtube.generateEmbedUrl( url );
    const embedCode = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    $('#player').hide().html(embedCode).fadeIn(3000);
  });
}

for (let i = 0; i < $links.length; i++) {
  const $link = $( $links[i] ); // Turn the vanilla DOM node back into a jQuery object
  thumbnailify( $link );
}
