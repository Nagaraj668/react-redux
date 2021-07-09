import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectChatData,
  selectSomeProp
} from './MasterDetailSlice';

export function Detail() {
  
  const someProp = useSelector(selectSomeProp);
  const chatData = useSelector(selectChatData);

  return (
    <div>
      <div>
        <br /><br />
        <span>{someProp}</span>
        {
          chatData.map(
            (message, i) => <p key={ i }>{ message }</p>
          )
        }
      </div>
    </div>
  );
}
