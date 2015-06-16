const {Rx, h} = Cycle;

function main({DOM}) {
  return {
    DOM: // TODO: Return an Observable of virtual DOM elements,
         // displaying a button and a label that shows how many
         // times the button was clicked.
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver('#app')
});
