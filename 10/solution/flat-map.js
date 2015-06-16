console.clear();

var clock = Rx.Observable.interval(100).take(10);

function delay(source, interval) {
  return source
    .flatMap(x =>
      Rx.Observable.interval(interval).first().map(() => x)
    );
}

delay(clock, 2000).subscribe(x => console.log(x));
