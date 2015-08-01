var $ = document.querySelector.bind( document );
var $$ = document.querySelectorAll.bind( document );

String.prototype.startsWith = function( chr ) {
  return this.slice(0, 1) === chr;
};

Array.prototype.flatten = function() {
  var results = [];
  this.forEach(function(data) {
    if( Array.isArray( data ) )
      results.push.apply(results, data);
    else
      results.push(data);
  });
  return results;
};

Array.prototype.empty = function() {
  if( this[0] == null )
    return true
  else
    return this;
}

function matches( elm, sel ) {
  var str = sel.replace(/^[\.#]/, '');
  if( sel.startsWith('.') && elm.classList.contains(str) ) {
    return true
  } else if( sel.startsWith('#') && elm.id === str ) {
    return true;
  } else if( elm.tagname.toLowerCase() === sel ) {
    return true;
  }
}

$.siblings = function( elm, sel ) {
  var matched = false;
  var elms = elm.children;
  var len = elms.length;

  while( (elm = elms[--len]) && elm.nodeType !== 9 ) {
    if( matched = elm.nodeType === 1 && matches( elm, sel ) )
      break;
  }
  return matched ? elm : matched;
}

$.find = function(elm, sel, type) {
  var matched = false;
  var str = sel.replace(/^[\.#]/, '');
  while((elm = elm[ type ]) && elm.nodeType !== 9) {
    if( matched = elm.nodeType === 1 && matches( elm, sel ) ) {
      break;
    }
  }
  return matched ? elm : matched;
}
