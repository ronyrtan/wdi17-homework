var page = 1;
var pages; // add page counter

var searchFlickr = function (query) {
  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: page,
    per_page: 50
  }).done(function (results) {
    pages = results.photos.pages
    _(results.photos.photo).each(function (p) {
      var url = generateURL(p);
      var urlind = generateURLind(p);
      var $img = $('<img>', {src: url, class: 'image_thumb'});
      $img.appendTo('#images').wrap($('<a>', {href: urlind, target: '_blank'}));
    });
  });
  page++
};

var generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change this for different sizes
    ].join('');
};

var generateURLind = function (photo) {
        return [
      'http://flickr.com/photos/',
      photo.owner,
      '/',
      photo.id,
    ].join('');
};

var debounce_layout = _.throttle(searchFlickr, 500);

$(document).ready(function () {

  $('#search').on('submit', function (e) {

    e.preventDefault(); // This form is going nowhere.
    $('#images').html('');
    var query = $('#query').val();
    searchFlickr(query);

    page = 1;
  });


  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 800) {
      var query = $('#query').val();
      if (page !== pages) {
        console.log(page);
        console.log(pages);
        debounce_layout(query)
      }
    }
  });
});
