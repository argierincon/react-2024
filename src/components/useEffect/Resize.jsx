/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

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

  const sectionRef = useRef(null);

  const [elemWidth, setElemWidth] = useState(0);
  const [elemHeight, setElemHeight] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();

      setElemWidth(rect.width);
      setElemHeight(rect.height);
    }
  }, [windowSize]);

  return (
    <section ref={sectionRef} className="card-primary">
      <h2 className="heading-primary">
        <span className="heading-gradient">WINDOW RESIZE</span>
      </h2>
      <section className="flex">
        <div className="mt-4">
          <p className="input-label">Width: {windowSize.width}</p>
          <p className="input-label"> Height: {windowSize.height}</p>
        </div>

        <div className="mt-4">
          <p className="input-label">Element width: {elemWidth}</p>
          <p className="input-label">Element height: {elemHeight}</p>
        </div>
      </section>
    </section>
  );
};
