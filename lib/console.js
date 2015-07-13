function _try( obj, key, value ) {
  if( arguments.length == 3 )
    obj && (obj[ key ] = obj[ key ] || value);
  return !!(obj && obj.hasOwnProperty( key ));
}

(function(global, logger) {
  'use strict';
  global.Console = logger();
})(window, function() {
  var __consoleApi = {
    history: [],
    clear: function() {
      window.console.clear();
      this.history = [];
    },
    log: function() {
      var args = [].slice.call(arguments);
      this.history = this.history || [];
      this.history.push( args );
      _console.log( args );
      return args[0];
    },
    xhr: function( url, options ) {
      options || (options = {});
      var xmlht2p = new XMLHttpRequest;

      [ 'type', 'params', "handler" ].forEach(function(key) {
        _try( options, key, options[ key ] );
      });

      if(typeof options.handler !== 'function')
        options.handler = function() { return this; };

      xmlht2p.open(options.type || "get", url, true);
      xmlht2p.onreadystatechange = options.handler;
      xmlht2p.send();
    }
  }
  return __consoleApi;
});
