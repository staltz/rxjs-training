const {Rx, h} = Cycle;

function main({DOM}) {
  return {
    DOM: // TODO: Return an Observable of virtual DOM elements,
         // showing a checkbox element, and a label that changes
         // its content from "off" to "ON" whenever the checkbox
         // gets toggled.
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver('#app')
});
