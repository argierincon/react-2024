import { useEffect, useRef } from "react";

export const AutoFocusBtn = () => {
  const useRefInput = useRef();
  const btnRef = useRef();

  useEffect(() => {
    useRefInput.current.select();
    setTimeout(() => {
      btnRef.current.focus();
    }, 1500);
  }, []);

  return (
    <section className="card-primary row-span-3">
      <h2 className="heading-primary mb-4 text-center">
        <span className="heading-gradient">AUTOFOCUS</span>
      </h2>

      <input
        ref={useRefInput}
        type="text"
        name="useRefInput"
        className="input-default mb-1.5"
        placeholder="Use ref input"
      />

      <button ref={btnRef} className="btn btn-blue mt-2">
        Use ref button
      </button>
    </section>
  );
};
