const Crawler = require('crawler');

const isCrawlable = function (url) {
  if (!url) { return false; }
  if (!url.startsWith('http')) { return false; }

  let terrible = false;
  const terribleSites = ['archive.is', 'google.com', 'microsoft.com', 'facebook.com', '.dev'];

  return !terribleSites.some( (awfulSite) => url.includes(awfulSite) );
};

const c = new Crawler({
  rateLimit: 1000,
  callback: function (err, res, done) {
    // Only traverse HTML sites where Cheerio ($) is a function.
    if (typeof res.$ === 'function') {
      console.log( res.$('title').text() );
      console.log( res.request.uri.href + '\n' );

      const $links = res.$('a');
      $links.each(function () {
        const href = res.$(this).attr('href');

        if (isCrawlable(href)) {
          c.queue( href ); // recurse
        }
      });
    }

    done();
  }
});

c.queue( process.argv[2] || 'http://lobste.rs' );
