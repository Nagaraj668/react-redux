import React from 'react';
import { Counter } from './features/counter/Counter';
import { CounterA } from './features/counter/CounterA';
import './App.css';

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <CounterA />
    </div>
  );
}

export default App;
