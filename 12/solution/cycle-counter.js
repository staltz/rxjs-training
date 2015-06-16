const {Rx, h} = Cycle;

function main({DOM}) {
  return {
    DOM: DOM.get('button', 'click')
      .map(ev => 1)
      .startWith(0)
      .scan((x,y) => x+y)
      .map(count =>
        h('div', [
          h('button', 'Click me'),
          h('p', `Clicked ${count} times`)
        ])    
      )
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver('#app')
});
