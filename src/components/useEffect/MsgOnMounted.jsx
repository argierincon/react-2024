/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const MsgOnMounted = ({ onCloseModal, time }) => {
  const [modalTime, setModalTime] = useState(time);

  const formattedTime = () => {
    const seconds = time / 1000;
    setModalTime(seconds.toFixed(1));
  };

  useEffect(() => {
    formattedTime();
  });

  return (
    <section className="absolute bg-indigo-500/30 h-full w-full top-0 left-0 z-10 flex items-center justify-center">
      <div className="card-primary p-6 flex flex-col gap-4">
        <h3 className="font-bold text-lg">Use effect Test 🌚</h3>
        <p>
          This modal is shown after {modalTime} seconds to test the useEffect
          Hook.
        </p>
        <button className="btn-blue--small ml-auto" onClick={onCloseModal}>
          Close
        </button>
      </div>
    </section>
  );
};
