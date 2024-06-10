import { Resize, InactivityTime } from "./components/useEffect/Imports.jsx";
import {
  Counter,
  Todo,
  Form,
  RandomBg,
} from "./components/useState/Imports.jsx";

const App = () => {
  return (
    <RandomBg>
      <InactivityTime />
      <Counter />
      <Todo />
      <Form />
      <Resize />
    </RandomBg>
  );
};

export default App;
