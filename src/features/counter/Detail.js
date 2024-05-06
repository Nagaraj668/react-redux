import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectChatData
} from './MasterDetailSlice';

export function Detail() {

  var chatData = useSelector(selectChatData);


  return (
    <div>
      <div>
        {
          chatData
            .filter((message) => parseInt(message.charAt(message.length - 1)) % 2 === 0)
            .map((message, i) => <p key={i}>{message}</p>)
        }
      </div>
    </div>
  );
}
