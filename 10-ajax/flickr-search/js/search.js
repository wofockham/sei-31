'use strict';

var state = {
  currentPage: 1,
  lastPageReached: false
};

var showImages = function showImages(results) {

  // Nested AKA helper function that returns a thumbnail URL for a given photo object.
  var generateURL = function generateURL(p) {
    return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change 'q' to something else for different sizes
    ].join('');
  };

  results.photos.photo.forEach(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img>', { src: thumbnailURL }); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images'); // $('#images').append($img);
  });
};

var searchFlickr = function searchFlickr(terms) {
  if (state.lastPageReached) return;

  console.log('Searching Flickr for these terms ' + terms);

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: terms,
    format: 'json',
    page: state.currentPage++
  }).done(showImages).done(function (data) {
    console.log(data);
    if (data.photos.page >= data.photos.pages) {
      state.lastPageReached = true;
    }
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    var query = $('#query').val();
    $('#images').empty();

    state.lastPageReached = false;
    state.currentPage = 1;

    searchFlickr(query);
  });

  var debouncedSearchFlickr = _.debounce(searchFlickr, 4000, { trailing: false });

  // Extremely twitchy
  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom <= 500) {
      var query = $('#query').val();
      debouncedSearchFlickr(query);
    }
  });
});