console.clear();

var source = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];

var result = 0;
var parsedNumber;
for (var i = 0; i < source.length; i++) {
  parsedNumber = parseInt(source[i]);
  if (!isNaN(parsedNumber)) {
    result += parsedNumber;
  }
}

console.log(result);
