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
        <br /><br />
        {
          chatData.map(
            (message, i) => <p key={ i }>{ message }</p>
          )
        }
      </div>
    </div>
  );
}
