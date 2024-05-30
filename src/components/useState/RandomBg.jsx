/* eslint-disable react/prop-types */
import { useState } from "react";

const grid = {
  display: "grid",
  gap: "1rem",
  paddingBottom: "1rem",
  gridTemplateRows: "repeat(7, minmax(10%, auto))",
};

const gridCount = [1, 2, 3];

export const RandomBg = ({ children }) => {
  const [bgColor, setBgcolor] = useState("bg-slate-50");

  const [gridCols, setGridCols] = useState("3");

  const gridColumns = {
    gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
  };

  const combinedStyles = { ...grid, ...gridColumns };

  const onChangeGridCols = (gridCount) => {
    setGridCols(gridCount);
  };

  const colorList = [
    "bg-slate-100",
    "bg-slate-200",
    "bg-slate-300",
    "bg-blue-50",
    "bg-blue-100",
    "bg-blue-200",
    "bg-teal-50",
    "bg-teal-100",
    "bg-teal-20",
  ];

  const onChangeBg = () => {
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];

    setBgcolor(randomColor);
  };

  return (
    <section className={`${bgColor} h-full p-4`}>
      <header className="mb-4 flex items-end gap-4">
        <div>
          <label htmlFor="count" className="input-label">
            Grid cols
          </label>

          <div className="flex gap-1.5">
            {gridCount.map((num) => (
              <button
                key={num}
                onClick={() => onChangeGridCols(num)}
                className="btn-blue--small"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <button onClick={onChangeBg} className="btn-blue--small">
          Change Bg color
        </button>
      </header>
      <div className="h-[calc(100%-80px)]" style={combinedStyles}>
        {children}
      </div>
    </section>
  );
};
