import { Resize } from "./components/useEffect/Resize.jsx";
import { Counter, Todo, Form } from "./components/useState/Imports.jsx";
import { RandomBg } from "./components/useState/RandomBg.jsx";

const App = () => {
  return (
    <RandomBg>
      <Counter />
      <Todo />
      <Form />
      <Resize />
    </RandomBg>
  );
};

export default App;
