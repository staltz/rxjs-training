console.clear();

var connectionFailures = Rx.Observable.interval(800).take(2)
  .map(i => ['Connection pooped', 'Refresh Epic Fail'][i]);

var renderFailures = Rx.Observable.interval(700).take(3)
  .map(i => ['Render failed: 309', 'Render failed: 17', 'Nothing rendered'][i]);

var userActions = Rx.Observable.interval(300).take(6)
  .map(i => ['Clicked', 'Scrolled', 'Clicked', 'Typed', 'Zoomed in', 'Scrolled'][i]);

var messages = Rx.Observable
  .merge(connectionFailures, renderFailures)
  .withLatestFrom(userActions, (failure, action) => 
    `System failed because of ${failure}, after the user ${action}.`
  );

messages.subscribe(x => console.log(x));
