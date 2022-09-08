import { AuthProvider } from './utils/authProvider';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { ProtectedRoute } from './components/AuthRoute';
import { Experiment } from './pages/Experiment';

export const App = () => {
  // todo:
  // app architecture and logic flow
  // persist token
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
          <Route path="home" element={<Login />} />
          <Route
            path="/experiment/:id"
            element={
              <ProtectedRoute>
                <Experiment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <h1>There's nothing here!</h1>
              </main>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};
