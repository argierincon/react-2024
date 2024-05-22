import { useState } from "react";
import "../../assets/index.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + count);
  };

  const handleDecrement = () => {
    if (counter <= 0) return;
    setCounter(counter - count);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleChangeCount = (e) => {
    const value = e.target.value;
    if (value > 0 && value.length <= 3 && /^\d*$/.test(value)) {
      setCount(Number(value));
    }
  };

  const handleCountReset = () => {
    setCount(Number(1));
  };

  return (
    <section>
      <div className="card-primary m-auto mt-20">
        <section className="counter-card">
          <h2 className="heading-primary">
            <span className="heading-gradient">COUNTER</span>
          </h2>
          <div>
            <div>
              <label htmlFor="count" className="input-label">
                Current count
              </label>
              <input
                id="count"
                type="text"
                className="input-default w-24"
                placeholder="Enter amount to change counter"
                value={count}
                onChange={handleChangeCount}
              />
            </div>

            <button
              className="btn-white--small mt-4 block"
              onClick={handleCountReset}
            >
              Reset
            </button>
          </div>

          <p className="text-6xl text-gray-700">{counter}</p>
        </section>

        <section className="mt-6 flex gap-2">
          <button
            className={`btn btn-blue ${
              counter <= 0 ? "cursor-not-allowed" : ""
            }`}
            disabled={counter <= 0}
            onClick={handleDecrement}
          >
            -{count}
          </button>
          <button
            className="btn btn-white"
            onClick={handleReset}
            disabled={counter <= 0}
          >
            Reset
          </button>

          <button className="btn btn-blue" onClick={handleIncrement}>
            +{count}
          </button>
        </section>
      </div>
    </section>
  );
};
