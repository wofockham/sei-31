const showImages = function (results) {

  // Nested AKA helper function that returns a thumbnail URL for a given photo object.
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change 'q' to something else for different sizes
    ].join('');
  }

  // process the results
  results.photos.photo.forEach(function (photo) {
    console.log( photo );
    const thumbnailURL = generateURL(photo);
    console.log(thumbnailURL);
    // create an image to display that photo URL
    // shove that image into the page
  });
};

const searchFlickr = function (terms) {
  console.log(`Searching Flickr for ${ terms }`);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: terms,
    format: 'json'
  }).done( showImages );
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    const query = $('#query').val();
    searchFlickr(query);
  });
});
