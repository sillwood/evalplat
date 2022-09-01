import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Dashboard";

export const Login = () => {
  return (
    <div>
      <h1>This is the Login page</h1>
      <Link to="/dashboard">Go to Dashboard</Link>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};
