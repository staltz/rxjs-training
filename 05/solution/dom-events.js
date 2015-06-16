console.clear();

// Get elements
var weightSliderElem = document.querySelector('#weight-slider'); 
var weightTextElem = document.querySelector('#weight-text');

var weight = Rx.Observable.fromEvent(weightSliderElem, 'input')
  .map(ev => ev.target.value)
  .startWith(weightSliderElem.value);

weight.subscribe(x => {
  weightTextElem.innerHTML = x;
});
