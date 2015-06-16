console.clear();

// Get elements
var weightSliderElem = document.querySelector('#weight-slider'); 
var weightTextElem = document.querySelector('#weight-text');
var heightSliderElem = document.querySelector('#height-slider'); 
var heightTextElem = document.querySelector('#height-text');
var bmiTextElem = document.querySelector('#bmi-text');

// Observables
var weight = Rx.Observable.fromEvent(weightSliderElem, 'input')
  .map(ev => ev.target.value)
  .startWith(weightSliderElem.value);

var height = Rx.Observable.fromEvent(heightSliderElem, 'input')
  .map(ev => ev.target.value)
  .startWith(heightSliderElem.value);

// TODO: create the Observable `bmi` which depends on
// Observables `weight` and `height` and is calculated
// as BMI = w / h*h, where w is the weight in kilograms,
// and h is the height in meters.

// Subscriptions
weight.subscribe(x => weightTextElem.innerHTML = x);
height.subscribe(x => heightTextElem.innerHTML = x);
bmi.subscribe(x => bmiTextElem.innerHTML = x);