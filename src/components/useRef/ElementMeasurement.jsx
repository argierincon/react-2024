import { useEffect, useRef, useState } from "react";

export const ElementMeasurement = () => {
  const sectionRef = useRef(null);

  const [elemWidth, setElemWidth] = useState(0);
  const [elemHeight, setElemHeight] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();

      setElemWidth(rect.width);
      setElemHeight(rect.height);
    }
  }, []);

  return (
    <section ref={sectionRef} className="card-primary row-span-3">
      <h2 className="heading-primary mb-4 text-center">
        <span className="heading-gradient">Element Measurement</span>
      </h2>
      <div className="mt-4">
        <p className="input-label">Width: {elemWidth}</p>
        <p className="input-label"> Height: {elemHeight}</p>
      </div>
    </section>
  );
};
