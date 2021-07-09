import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  somePropIncrement,
  selectCount
} from './counterSlice';

export function Counter() {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <button
          onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          onClick={() => dispatch(somePropIncrement())}>
          Some Prop
        </button>
      </div>
    </div>
  );
}
