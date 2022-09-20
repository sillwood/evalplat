import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './utils/authProvider';
import { AuthRoute } from './components/AuthRoute';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Experiment } from './pages/Experiment';
import { Logout } from './components/Logout';

export const App = () => {
  // todo:
  // persist token
  // tailwind styling

  // todo API:
  // TODO: where to store if user has access to a particular experiment? on the experiment itself or the user itself?

  // GET: (userId) get all experiments summary with completion info (startIdx for continue)
  // GET: (experimentId) array of correpsonding pairs
  // POST: pair respsonse: update with userId and questionId

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
          <Route index element={<Login />} />
          <Route path="home" element={<Login />} />
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
