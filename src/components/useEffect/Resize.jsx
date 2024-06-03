/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export const Resize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", onResize);

    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="card-primary">
      <h2 className="heading-primary">
        <span className="heading-gradient">WINDOW RESIZE</span>
      </h2>

      <div className="mt-4">
        <p className="input-label">Width: {windowSize.width}</p>
        <p className="input-label"> Height: {windowSize.height}</p>
      </div>
      {/* <p>{windowSize}</p> */}
    </section>
  );
};
