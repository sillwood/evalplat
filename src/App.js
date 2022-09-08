import { AuthProvider } from "./utils/authProvider";
import { Login } from "./pages/Login";

export const App = () => {
  // app architecture and logic flow
  // what happens when people finish an experiment
  // tailwind styling

  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <h1>EvalPlat</h1>
          <Login />
        </header>
      </div>
    </AuthProvider>
  );
};
