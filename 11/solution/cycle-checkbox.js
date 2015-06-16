const {Rx, h} = Cycle;

function main({DOM}) {
  return {
    DOM: DOM.get('input', 'click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        h('div', [
          h('input', {type: 'checkbox'}), 'Toggle me',
          h('p', `${toggled ? 'ON' : 'off'}`)
        ])
      )
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver('#app')
});
