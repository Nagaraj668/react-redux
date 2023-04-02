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
          onClick={() => dispatch(sayHi("Hi: " + (new Date().toString())))}>
          Say Hi
        </button>
        <button style={{marginLeft:'5px'}}
          onClick={() => dispatch(sayBye("Bye: " + (new Date().toString())))}>
          Say Bye
        </button>
      </div>
    </div>
  );
}
