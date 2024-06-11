import { useRef } from "react";

export const AnimatedElement = () => {
  const h2Ref = useRef(null);

  const stylesAnimated = {
    "text-transform": "uppercase",
    "margin-left": "20px",
    transition: "all 1s ease-in-out",
  };

  const stylesInitial = {
    "margin-left": "0px",
    transition: "all 1s ease-in-out",
  };

  const onAddAnimation = () => {
    if (h2Ref.current) {
      Object.assign(h2Ref.current.style, stylesAnimated);

      setTimeout(() => {
        Object.assign(h2Ref.current.style, stylesInitial);
      }, 700);
    }
  };

  return (
    <section className="card-primary col-span-1 row-span-2">
      <h2 ref={h2Ref} className="heading-primary">
        <span className="heading-gradient">Animated element</span>
      </h2>
      <button className="btn-blue--small mt-2" onClick={onAddAnimation}>
        Animate
      </button>
    </section>
  );
};
