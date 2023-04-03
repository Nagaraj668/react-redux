import { useDispatch } from 'react-redux';
import {
  sayHi, sayBye
} from './MasterDetailSlice';

export function Master() {

  const dispatch = useDispatch();

  return (
    <div>
      <div>
      <button
          onClick={() => {
            let date = new Date().toString()
            date = date.replace(" GMT+0530 (India Standard Time)", "")
            dispatch(sayHi("Hi: " + date))
          }}>
          Say Hi
        </button>
        <button style={{marginLeft:'5px'}}
          onClick={() => {
            let date = new Date().toString()
            date = date.replace(" GMT+0530 (India Standard Time)", "")
            dispatch(sayBye("Bye: " + date))
          }}>
          Say Bye
        </button>
      </div>
    </div>
  );
}
