const state = {
  currentPage: 1,
  lastPageReached: false,
  requestInProgress: false
};

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
  };

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images'); // $('#images').append($img);
  });
};


const searchFlickr = function (terms) {
  if (state.lastPageReached || state.requestInProgress) return;

  console.log(`Searching Flickr for ${ terms }`);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  state.requestInProgress = true;

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: terms,
    format: 'json',
    page: state.currentPage++
  }).done( showImages ).done(function (data) {
    console.log( data );
    if (data.photos.page >= data.photos.pages) {
      state.lastPageReached = true;
    }
    state.requestInProgress = false;
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    const query = $('#query').val();
    $('#images').empty();

    state.lastPageReached = false;
    state.currentPage = 1;

    searchFlickr(query);
  });

  // Extremely twitchy
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom <= 500) {
      const query = $('#query').val();
      searchFlickr(query);
    }
  });
});
