import { useState } from "react";
import "../../assets/index.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <section>
      <div className="card-primary m-auto mt-20">
        <h2 className="heading-primary">
          <span className="heading-gradient">COUNTER</span>
        </h2>

        <p className="text-6xl text-gray-700">{counter}</p>

        <section className="mt-6 flex gap-2">
          <button className="btn-primary btn-blue" onClick={handleIncrement}>
            +1
          </button>
          <button className="btn-default btn-white" onClick={handleReset}>
            Reset
          </button>
          <button
            className={`btn-primary btn-blue ${
              counter <= 0 ? "cursor-not-allowed" : ""
            }`}
            disabled={counter <= 0}
            onClick={handleDecrement}
          >
            -1
          </button>
        </section>
      </div>
    </section>
  );
};
