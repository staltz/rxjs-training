console.clear();

var clock = Rx.Observable.interval(1000).take(10);

setTimeout(() => {
  clock.subscribe(x => console.log(`     b: ${x}`))
}, 4500);

clock.subscribe(x => console.log(`a: ${x}`));

// TODO: Fix this code so that both subscribers log
// the same events at the same time.
