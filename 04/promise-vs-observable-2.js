console.clear();

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('timeout');
    resolve(123);
  }, 1000);
  console.log('promise started');
});

promise.then(x => console.log('resolved: ' + x));

// TODO: Create an RxJS Observable `observable` with 
// the same behavior as the promise above, but also 
// clear the timeout when the Observable is disposed.

observable.subscribe(x => console.log('next: ' + x));

// TODO: After 500ms, dispose the subscription.
