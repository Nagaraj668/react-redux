import { useDispatch } from 'react-redux';
import {
  somePropIncrement, sayHi
} from './MasterDetailSlice';

export function Master() {

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(somePropIncrement())}>
          Some Prop
        </button>
        <button
          onClick={() => dispatch(sayHi())}>
          Say Hi
        </button>
      </div>
    </div>
  );
}
