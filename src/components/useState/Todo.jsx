import { useState } from "react";
import { SearchBox } from "./SearchBox";
import "../../assets/index.css";

export const Todo = () => {
  // useState = variables reactivas
  const [taskList, setTaskList] = useState([]);

  const [inputVal, setInputVal] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = taskList.filter((task) =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onClearInput = () => {
    setInputVal("");
  };

  const onAddItem = () => {
    if (inputVal !== "") {
      setTaskList((prevTaskList) => [...prevTaskList, inputVal]);
      onClearInput();
    }
  };

  const onEnterAdd = (e) => {
    if (e.key !== "Enter") return;
    onAddItem();
  };

  const onClearList = () => {
    setTaskList([]);
  };

  const onClearItem = (idx) => {
    const taskCleaned = taskList.filter((elem, i) => i !== idx);
    setTaskList(taskCleaned);
  };

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <section className="card-primary row-span-7">
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
          onKeyUp={(e) => onEnterAdd(e)}
        />

        <section className="mt-3 flex gap-2">
          <button
            className="btn-white--small"
            onClick={onClearInput}
            disabled={!inputVal}
          >
            Clear input
          </button>
          <button
            className="btn-blue--small"
            onClick={onAddItem}
            disabled={!inputVal}
          >
            Add
          </button>
        </section>

        {taskList.length > 3 && (
          <SearchBox onSearchChange={handleSearchChange} />
        )}
      </div>

      <>
        {taskList.length > 0 && filteredTasks.length === 0 ? (
          <p className="mt-3 text-gray-500">No matches found :c</p>
        ) : (
          <div className="mt-6 pl-4">
            <ul className="list-disc">
              {filteredTasks.map((item, idx) => (
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
              ))}
            </ul>
          </div>
        )}

        {taskList.length === 0 && (
          <p className="mt-3 text-gray-500">The task list is empty.</p>
        )}

        {taskList.length > 0 && (
          <button className="btn-white--small mt-4" onClick={onClearList}>
            Clear list
          </button>
        )}
      </>
    </section>
  );
};
