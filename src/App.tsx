import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
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
