import React from 'react';
import './App.css';
import MasterClass from './features/counter/MasterClass';
import DetailClass from './features/counter/DetailClass';

function App() {
  return (
    <div>
      <MasterClass />
      <hr />
      <DetailClass />
    </div>
  );
}

export default App;
