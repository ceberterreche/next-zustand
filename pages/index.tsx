import { useState } from "react";
import { useCounterStore } from "../store/counter/counterStore";
import useStore from "../store2/index";

export default function Home() {
  const { increment, incrementByAmount, decrement, counter } = useStore();
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h2>The current number is</h2>
      <h1>{counter}</h1>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button onClick={() => incrementByAmount(Number(incrementAmount))}>
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => decrement()}>Decrement by 1</button>
        <button onClick={() => increment()}>Increment by 1</button>
      </div>
    </>
  );
}
