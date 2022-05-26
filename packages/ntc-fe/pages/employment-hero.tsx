import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  const [events, setEvents] = React.useState<
    {
      EVENT_TYPE: 'INCREASE' | 'DECREASE';
    }[]
  >([]);
  function undo() {
    const lastEvent = events.pop();
    if (lastEvent.EVENT_TYPE === 'INCREASE') {
        setCount((count) => count - 1);
    }
    if (lastEvent.EVENT_TYPE === 'DECREASE') {
        setCount((count) => count + 1);
    }
  

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
            events.push({
                EVENT_TYPE: 'INCREASE'
            })
          setCount((count) => {
            return count + 1;
          });
        }}
      >
        [Increase by 1]
      </button>
      <button onClick={() => {
          events.push({
            EVENT_TYPE: 'INCREASE'
        })
        setCount((count) => count - 1)
      }}>
        [Decrease by 1]
      </button>
      <button>[Undo]</button>
    </div>
  );
};

function EmploymentHero() {
  return (
    <div>
      Hello
      <Counter />
    </div>
  );
}

export default EmploymentHero;
