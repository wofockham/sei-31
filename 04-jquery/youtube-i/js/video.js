const links = document.querySelectorAll( 'li a' );

for (let i = 0; i < links.length; i++) {
  const url = links[ i ].getAttribute('href');
  const thumbnailURL = youtube.generateThumbnailUrl( url );

  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumbnailURL);

  links[i].appendChild( thumbnail );
}
