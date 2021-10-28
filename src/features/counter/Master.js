import { useDispatch } from 'react-redux';
import {
  sayHi
} from './MasterDetailSlice';

export function Master() {

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(sayHi())}>
          Say Hi
        </button>
      </div>
    </div>
  );
}
