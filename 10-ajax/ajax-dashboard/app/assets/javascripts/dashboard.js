$(document).ready(function () {
  setInterval(function () {
    $.get('/api/brother').done(function (result) {
      $('#brother').text(result);
    });
  }, 3000);
});
