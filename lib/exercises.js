var latest = lolDb.fetch();

var chapters = {
  1 : "imperative-array.js",
  2 : "functional-array.js",
  3 : "functional-event-stream.js",
  4 : ["promise-vs-observable-1.js", "promise-vs-observable-2.js"],
  5 : "dom-events.js",
  6 : "bmi.js",
  7 : "combinators-and-or.js",
  8 : "correlational-combinators.js",
  9 : "cold-and-hot.js",
  10 : "flat-map.js",
  11 : "cycle-checkbox.js",
  12 : "cycle-counter.js",
  13 : "cycle-bmi.js"
};

var makeKey = function(key) {
  return key < 10 ? '0' + key : '' + key
};

var urls = Object.keys( chapters ).map(function( key ) {
  if( Array.isArray( chapters[key] ) ) {
    return chapters[key].map(function(data) {
      return [ makeKey(key), data ].join('/');
    });
  }
  return [makeKey(key), chapters[ key ]].join('/');
}).flatten();

function indirectEval( cb ) {
  var code = new Function('exports', cb );
  var exports = {};
  code( exports );
  return exports;
}

$('#eval').onclick = function(e) {
  e.preventDefault();
  var html = $('.html').value.trim();
  var code = $('.js').value.trim();
  code = code.replace(/^function\s*([^)]+)\)\s*{/, '').replace(/\}$/, '');
  $('.solution').innerHTML = html.replace(/\n/g, '<br/>');
  indirectEval( code );
}
