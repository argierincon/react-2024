import { Counter, Todo } from "./components/useState/Imports.jsx";
import { RandomBg } from "./components/useState/RandomBg.jsx";

const App = () => {
  return (
    <RandomBg>
      <Counter />
      <Todo />
    </RandomBg>
  );
};

export default App;
