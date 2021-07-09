import React from 'react';
import { Master } from './features/counter/Master';
import { Detail } from './features/counter/Detail';
import './App.css';

function App() {
  return (
    <div>
      <Master />
      <hr />
      <Detail />
    </div>
  );
}

export default App;
