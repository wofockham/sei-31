$(document).ready(function () {
  // const updateBrother = function () {
  //   // $.get('/api/brother').done(function (result) {
  //   //   $('#brother').text(result);
  //   // });
  //
  //   $('#brother').load('/api/brother'); // This actually does AJAX
  // };
  //
  // setInterval(updateBrother, 3000);
  // updateBrother();
  //
  // const updateTime = function () {
  //   $('#time').load('/api/time');
  // };
  //
  // setInterval(updateTime, 1000);
  // updateTime();
  //
  // const updateUptime = function () {
  //   $('#uptime').load('/api/uptime');
  // };
  //
  // setInterval(updateUptime, 5000);
  // updateUptime();

  const getInfo = function () {
    $.getJSON('/api/info').done(function (data) {
      $('#brother').text( data.brother );
      $('#time').text( data.time );
      $('#uptime').text( data.uptime );
    });
  };

  setInterval(getInfo, 2000); // Polling
  getInfo();

  const updateFortune = function () {
    $('#fortune').load('/api/fortune');
  };

  setInterval(updateFortune, 15000);
  updateFortune();
});
