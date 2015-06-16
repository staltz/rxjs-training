console.clear();

var clock = Rx.Observable.interval(100).take(10);

function delay(source, interval) {
  // TODO: implement this function using flatMap().
  // You should return an Observable.
}

delay(clock, 2000).subscribe(x => console.log(x));
