var lolDb = (function( key ) {
  var lS = window.localStorage;
  var ops;
  var that = this;
  var lolKey = key;

  var jsonizer = {
    'Function': function( data ) {
      return data.toString();
    },
    'Node': function() {
      return data.classList.length ?
               data.classList :
               ( data.id || data.tagname );
    },
    'NodeList': function() {
      return [].map.call(data, function() {
        return data.classList.length ?
                 data.classList :
                ( data.id || data.tagname );
        });
    },
    'Object': JSON.stringify,
    'String': JSON.stringify,
  }

  function classOf( obj ) {
    return ( {} ).toString.call( obj ).slice(8, -1)
  }

  function toJson( data ) {
    var json;
    try {
      if( data instanceof Node )
        json = JSON.stringify( jsonizer.Node( data ) );
      else if( data instanceof NodeList )
        json = JSON.stringify( jsonizer.NodeList( data ) );
      else
        json = JSON.stringify( jsonizer[ classOf( data ) ]( data ) )
    } catch (e) {
      Error("Err!! Ya's JSON is too smart for me");
    }
    return json;
  }

  if(!lS) {
    Error("Neanderthal Maan, you don't possess a browser")
  } else {
    ops = {
      setKey: function( name ) {
        key = name;
        return that;
      },
      insert: function( data ) {
        lS.setItem( key, toJson( data ) );
        return that;
      },
      fetch: function( key ) {
        key || ( key = lolKey )
        lS.getItem( key );
        return that;
      }
    }
  }

  return ops;

}('rxjs'))
