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
        <div className="text-green-500 p-4">
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>

        <div className="text-red-500 p-4">
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Increment By Amount
          </button>
        </div>
        <div className="text-cyan-500 p-4">{count}</div>
        <div className="text-cyan-500 p-4">
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
