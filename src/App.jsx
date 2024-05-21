import { Counter, Todo } from "./components/useState/Imports.jsx";

const App = () => {
  return (
    <section className="bg-slate-50 h-screen p-4">
      <Counter />
      <Todo />
    </section>
  );
};

export default App;
