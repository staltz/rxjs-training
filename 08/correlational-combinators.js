console.clear();

var connectionFailures = Rx.Observable.interval(800).take(2)
  .map(i => ['Failed to connect', 'Failed to refresh'][i]);

var renderFailures = Rx.Observable.interval(700).take(3)
  .map(i => ['Render failed: 309', 'Render failed: 17', 'Nothing rendered'][i]);

var userActions = Rx.Observable.interval(300).take(6)
  .map(i => ['Clicked', 'Scrolled', 'Clicked', 'Typed', 'Zoomed in', 'Scrolled'][i]);

// Use these for debugging
// connectionFailures.subscribe(x => console.log(x));
// renderFailures.subscribe(x => console.log(x));
// userActions.subscribe(x => console.log(x));

// TODO: Create an Observable `messages` which emits the string
// "System failed because of ${failure} after the user ${action}"
// with ${failure} and ${action} appropriately replaced, based on
// `connectionFailures`, `renderFailures`, and `userActions`.

messages.subscribe(x => console.log(x));
