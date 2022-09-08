import { useAuth } from "../hooks/useAuth";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";

export const Login = () => {
  const { token, handleLogin } = useAuth();

  return (
    <div>
      <h1>This is the Login page</h1>
      <h2>token: {token}</h2>
      <button onClick={handleLogin}>Login</button>
      <Link to="/dashboard">Go to Dashboard</Link>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};
