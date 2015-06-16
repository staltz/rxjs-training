const {Rx, h} = Cycle;

function renderWeightSlider(weight) {
  return h('div', [
    `Weight ${weight}kg`,
    h('input#weight', {type: 'range', min: 40, max: 140, value: weight})
  ]);
}

function renderHeightSlider(height) {
  return h('div', [
    `Height ${height}cm`,
    h('input#height', {type: 'range', min: 140, max: 210, value: height})
  ]);
}

function calculateBMI(weight, height) {
  const heightMeters = height * 0.01;
  return weight / (heightMeters * heightMeters);
}

function intent(DOM) {
  return {
    changeWeight: DOM.get('#weight', 'input').map(ev => ev.target.value),
    changeHeight: DOM.get('#height', 'input').map(ev => ev.target.value)
  };
}

function model(intents) {
  return Rx.Observable
    .combineLatest(
      intents.changeWeight.startWith(70),
      intents.changeHeight.startWith(170),
      (weight, height) => ({weight, height, bmi: calculateBMI(weight, height)})
    );
}

function view(state) {
  return state.map(({weight, height, bmi}) =>
    h('div', [
      renderWeightSlider(weight),
      renderHeightSlider(height),
      h('h2', `BMI is ${bmi}`)
    ])
  );
}

function main({DOM}) {
  return {
    DOM: view(model(intent(DOM)))
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver('#app')
});
