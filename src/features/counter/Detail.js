import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectChatData
} from './MasterDetailSlice';

export function Detail() {

  var chatData = useSelector(selectChatData);


  let arr = [1, 2, 2, 43]
  let sum = arr.reduce((sum, curr) => {
    sum = sum + curr
    return sum
  }, 0)

  return (
    <div>
      <p>{sum}</p>
      <div>
        <br /><br />
        {
          chatData
            .filter((message) => parseInt(message.charAt(message.length - 1)) % 2 === 0)
            .map((message, i) => <p key={i}>{message}</p>)
        }
      </div>
    </div>
  );
}
