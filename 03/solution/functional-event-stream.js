console.clear();

var source = Rx.Observable.interval(400).take(9)
  .map(i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

var result = source
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .scan((x, y) => x + y);

result.subscribe(x => console.log(x));
