import { useState } from "react";
import "../../assets/index.css";

export const Todo = () => {
  // useState = variables reactivas
  const [taskList, setTaskList] = useState([]);

  const [inputVal, setInputVal] = useState("");

  const onClearInput = () => {
    setInputVal("");
  };

  const onAddItem = () => {
    // Mantengo el estado inicial y agrego el valor del input
    if (inputVal !== "") {
      setTaskList([...taskList, inputVal]);
      onClearInput();
    }
  };

  const onClearList = () => {
    setTaskList([]);
  };

  const onClearItem = (idx) => {
    const taskCleaned = taskList.filter((elem, i) => i !== idx);
    setTaskList(taskCleaned);
  };

  return (
    <>
      <section className="card-primary m-auto mt-20">
        <div>
          <h2 className="heading-primary mb-4">
            <span className="heading-gradient">TO DO LIST!</span>
          </h2>

          <input
            type="text"
            className="input-default"
            placeholder="Add task"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />

          <section className="mt-6 flex gap-2">
            <button
              className="btn btn-white"
              onClick={onClearInput}
              disabled={!inputVal}
            >
              Clear input
            </button>
            <button
              className="btn btn-blue"
              onClick={onAddItem}
              disabled={!inputVal}
            >
              Add
            </button>
          </section>
        </div>

        {taskList.length > 0 && (
          <>
            <div className="mt-6 pl-4">
              <ul className="list-disc">
                {taskList.map((item, idx) => {
                  return (
                    <li className="mt-2" key={`${idx}-${item}`}>
                      <div className="grid grid-cols-[1fr_70px] items-center">
                        <p>{item}</p>
                        <button
                          className="btn-white--small"
                          onClick={() => onClearItem(idx)}
                        >
                          <span>x</span>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button className="btn-white--small mt-4" onClick={onClearList}>
              Clear list
            </button>
          </>
        )}
      </section>
    </>
  );
};
