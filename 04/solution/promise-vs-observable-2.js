console.clear();

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('timeout');
    resolve(123);
  }, 1000);
  console.log('promise started');
});

promise.then(x => console.log('resolved: ' + x));

var observable = Rx.Observable.create(function (observer) {
  var x = setTimeout(function () {
    console.log('timeout');
    observer.onNext(123);
  }, 1000);
  console.log('observable started');
  return function onDispose() {
    console.log("dispose")
    clearTimeout(x);
  };
});

var subscription = observable.subscribe(x => console.log('next: ' + x));

setTimeout(() => {
  subscription.dispose();
}, 500);
