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

// Notice how `bmi` implements the Reactive pattern: observes
// data from `weight` and `height`, while these are oblivious
// to what happens in `bmi`.
var bmi = Rx.Observable.combineLatest(weight, height,
  (weightKg, heightCm) => {
    var heightMeters = heightCm * 0.01;
    return weightKg / (heightMeters * heightMeters);
  }
);

// Subscriptions
weight.subscribe(x => weightTextElem.innerHTML = x);
height.subscribe(x => heightTextElem.innerHTML = x);
bmi.subscribe(x => bmiTextElem.innerHTML = x);