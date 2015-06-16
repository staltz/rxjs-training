console.clear();

// Get elements
var weightSliderElem = document.querySelector('#weight-slider'); 
var weightTextElem = document.querySelector('#weight-text');
var heightSliderElem = document.querySelector('#height-slider'); 
var heightEditTextElem = document.querySelector('#height-edit-text'); 
var heightTextElem = document.querySelector('#height-text');
var bmiTextElem = document.querySelector('#bmi-text');

// Observables
var weight = Rx.Observable.fromEvent(weightSliderElem, 'input')
  .map(ev => ev.target.value)
  .startWith(weightSliderElem.value);

var height1 = Rx.Observable.fromEvent(heightSliderElem, 'input')
  .map(ev => ev.target.value)
  .startWith(heightSliderElem.value);

var height2 = Rx.Observable.fromEvent(heightEditTextElem, 'input')
  .map(ev => parseInt(ev.target.value))
  .startWith(heightEditTextElem.value);

var bmi = Rx.Observable.combineLatest(weight, height1.merge(height2), 
  (weightVal, heightVal) => {
    var heightKg = heightVal * 0.01;
    return weightVal / (heightKg * heightKg);
  }
);

// Subscriptions
weight.subscribe(x => weightTextElem.innerHTML = x);
height1.subscribe(x => heightTextElem.innerHTML = x);
bmi.subscribe(x => bmiTextElem.innerHTML = x);
