import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Tech-Net</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>

      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By Amount
        </button>
      </div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}

export default App;
