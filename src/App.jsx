import {
  Counter,
  Todo,
  Form,
  RandomBg,
} from "./components/useState/Imports.jsx";

import {
  Resize,
  InactivityTime,
  RandomGif,
} from "./components/useEffect/Imports.jsx";

import {
  AutoFocusBtn,
  ElementMeasurement,
} from "./components/useRef/Imports.jsx";

const App = () => {
  return (
    <RandomBg>
      <Counter />
      <InactivityTime />
      <Todo />
      <Form />
      <RandomGif />
      <Resize />
      <ElementMeasurement />
      <AutoFocusBtn />
    </RandomBg>
  );
};

export default App;
