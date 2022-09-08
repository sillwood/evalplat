import { AuthProvider } from './utils/authProvider';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

export const App = () => {
  // app architecture and logic flow
  // what happens when people finish an experiment
  // tailwind styling

  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <h1>EvalPlat</h1>
        </header>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </AuthProvider>
  );
};
