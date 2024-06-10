import {
  Resize,
  InactivityTime,
  RandomGif,
} from "./components/useEffect/Imports.jsx";
import {
  Counter,
  Todo,
  Form,
  RandomBg,
} from "./components/useState/Imports.jsx";

const App = () => {
  return (
    <RandomBg>
      <Counter />
      <InactivityTime />
      <Todo />
      <Form />
      <RandomGif />
      <Resize />
    </RandomBg>
  );
};

export default App;
