const {Rx, h} = Cycle;

function sliderElem({DOM, props}) {
  const initialValue$ = props.get('initial').first();
  const newValue$ = DOM.get('.slider', 'input')
    .map(ev => ev.target.value).share(); // share() is a gotcha
  const value$ = initialValue$.concat(newValue$);
  const vtree$ = Rx.Observable.combineLatest(props.get('*'), value$,
    (props, value) =>
      h('div', [
        `${props.label} ${value}${props.unit}`,
        h('input.slider', {
          type: 'range',
          min: props.min,
          max: props.max,
          value: value
        })
      ])
  );

  return {
    DOM: vtree$,
    events: {
      newValue: newValue$
    }
  };
}

function calculateBMI(weight, height) {
  const heightMeters = height * 0.01;
  return weight / (heightMeters * heightMeters);
}

function intent(DOM) {
  return {
    changeWeight: DOM.get('#weight', 'newValue').map(ev => ev.detail),
    changeHeight: DOM.get('#height', 'newValue').map(ev => ev.detail)
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
      h('slider-elem#weight', {
        key: 1, label: 'Weight', unit: 'kg', min: 40, initial: weight, max: 140
      }),
      h('slider-elem#height', {
        key: 2, label: 'Height', unit: 'cm', min: 140, initial: height, max: 210
      }),
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
  DOM: Cycle.makeDOMDriver('#app', {
    'slider-elem': sliderElem
  })
});
