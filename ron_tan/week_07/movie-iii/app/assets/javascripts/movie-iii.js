var xhr = new XMLHttpRequest();

$(document).ready(function () {

  $('.info').hide();
  $('#ytplayer').hide();
  $('.youtubeVid').hide();

  $('#movie_search').on('submit', function (e) {
    e.preventDefault();

    $('.results').html(''); // clears the results
    $('.results').show();
    $('.details').html('');
    $('.info').hide();
    $('.welcome').hide();
    $('#ytplayer').hide();
    $('.youtubeVid').hide();


    movie = $('#title').val() // if replace space with +
    movie.replace(/ /g, "+");
    var url = 'http://omdbapi.com/?s='+movie;

    xhr.onreadystatechange = function () { // check the ready state
      if (xhr.readyState !== 4) {return}
      var posterUrl = JSON.parse(xhr.responseText).Search; // for multiple searches need for.each .Search
      posterUrl.forEach(function (posterUrl) {
        var img = '<img class="thumbnails" src=' + posterUrl.Poster +' alt='+ posterUrl.Title +'>'    // get url for image
        $('.results').append(img)   // append image to div
      });

      $('.thumbnails').click(function () {
        $('.results').hide();
        $('.info').show();
        $('.youtubeVid').show();
        $('#ytplayer').show();
        posterUrls = this.src;
        posterUrl.forEach(function (posterUrl) {
          if(posterUrl.Poster === posterUrls) {
            $('.details').append('<li class="posterTitle"><h2>'+posterUrl.Title+'</h2></li>')
            $('.details').append('<img class="posterDetail" src='+posterUrl.Poster+'>')
            $('.details').append('<li><span>Year: </span>'+posterUrl.Year+'</li>')
            $('.details').append('<li><span>imdbID: </span>'+posterUrl.imdbID+'</li>')
            $('.details').append('<li><span>Type: </span>'+posterUrl.Type+'</li>')
            $('.ytVid').attr('src', 'https://www.youtube.com/embed?listType=search&list='+posterUrl.Title.replace(/ /g, "")+'trailer')
            $('#player').attr('src', 'https://www.youtube.com/embed?listType=search&list='+posterUrl.Title.replace(/ /g, "")+'trailer')
          }
        });

      });
    };
    xhr.open('GET', url);
    xhr.send();
  });
});
