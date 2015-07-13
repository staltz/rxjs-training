;(function( factory ) {
  var pos = pos || 0;

  [].slice.call($$('.cells')).forEach(function(cell) {
    (function( c ) {
      var elm;
      c.onclick = function(e) {
        if(elm = $.siblings(e.target, '.window-label') || $.find(e.target, '.window-label', 'nextSibling'))
          elm.style.opacity = 0;
      }
    })(cell);
  });

  function move( v ) {
    if(v === -1) {
      pos -= 1;
    } else if( v === 1) {
      pos +=1;
      lolDb.insert( pos );
      return Math.min(pos, urls.length);
    }
    return Math.min(pos, 0);
  }

  function getUrl( urls, pos ) {
    return urls[ pos ];
  }

  function navigate( e ) {
    var url;
    e.preventDefault();
    pos = move(+e.target.dataset.pos);
    url = getUrl( urls, pos );

    factory( url );
    $("#q").innerHTML = '<u>' + url.replace(/\.\w+/, '') + '</u>';
  }

  function initHistory() {
    var pos, url;
    if(lolDb) {
      pos = lolDb.fetch() && "0";
      url = getUrl( urls, +pos );

      factory( url );
      $("#q").innerHTML = '<u>' + url.replace(/\.\w+/, '') + '</u>';

    } else {
      setTimeout(initHistory, 1000);
    }
  }

  $('#next').onclick = navigate;
  $('#prev').onclick = navigate;
  $('#start').onclick = navigate;
  document.addEventListener('DOMContentLoaded', initHistory, false);

})(function( url ) {
  function handler() {
    if(this.status < 400 && this.readyState === 4 )
      $('.question').innerHTML = this.response
  }
  Console.xhr(url, { handler: handler });
})
