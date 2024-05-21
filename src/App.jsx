import { useEffect, useState, useMemo } from "react";
import { Counter, Todo } from "./components/useState/Imports.jsx";
import images from "./assets/bg-cats/images.js";

const App = () => {
  const memoizedImages = useMemo(() => images, []);

  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const chooseRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * memoizedImages.length);
      const randomImage = memoizedImages[randomIndex];
      setCurrentImage(randomImage);
    };

    chooseRandomImage();
  }, [memoizedImages]);

  const bodyStyles = {
    position: "relative",
    height: "100vh",
    margin: 0,
    overflow: "hidden",
  };

  const backgroundStyles = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${currentImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(50%)",
    zIndex: -1,
  };

  return (
    <section style={bodyStyles}>
      <div style={backgroundStyles}></div>
      <Counter />
      <Todo />
    </section>
  );
};

export default App;
