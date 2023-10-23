import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <>
      <h1>Tech-Net</h1>
      <div>
        <button>Increment</button>
      </div>
      <div>{count}</div>
      <div>
        <button>Decrement</button>
      </div>
    </>
  );
}

export default App;
