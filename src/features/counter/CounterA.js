import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCount, selectSomeProp
} from './counterSlice';

export function CounterA() {
  
  const count = useSelector(selectCount);
  const someProp = useSelector(selectSomeProp);

  return (
    <div>
      <div>
        <span>{count}</span>
        <br /><br />
        <span>{someProp}</span>
      </div>
    </div>
  );
}
