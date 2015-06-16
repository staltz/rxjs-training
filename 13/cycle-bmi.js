const {Rx, h} = Cycle;

function main({DOM}) {
  return {
    DOM: // TODO: Return an Observable of virtual DOM elements,
         // displaying:
         // - A label indicating the current weight
         // - A slider to change the weight
         // - A label indicating the current height
         // - A slider to change the height
         // - An <h2> element with "BMI is ${bmi}", where ${bmi}
         // is replaced by the calculated Body Mass Index from 
         // the dynamic weight and height parameters.
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver('#app')
});
