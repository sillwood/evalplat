import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './utils/authProvider';
import { AuthRoute } from './components/AuthRoute';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Experiment } from './pages/Experiment';
import { Logout } from './components/Logout';

export const App = () => {
  // todo:
  // isSigningUp from params w/ separate component?
  // tailwind styling
  // check confirmation email toast after signup

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header" onClick={handleClick}>
          <h1>EvalPlat</h1>
          <Logout />
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="signup=:bool" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="/experiment/:id"
            element={
              <AuthRoute>
                <Experiment />
              </AuthRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <Dashboard />
              </AuthRoute>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <h1>404 There's nothing here!</h1>
              </main>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};
