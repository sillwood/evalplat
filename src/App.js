import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Experiment } from "./pages/Experiment";

export const App = () => {
  // TODO: install tailwind, react-router
  // app architecture and logic flow
  // what happens when people finish an experiment
  // tailwind styling

  return (
    <div className="App">
      <header className="App-header">
        <h1>EvalPlat</h1>
        <Login />
      </header>
    </div>
  );
};
