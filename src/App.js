import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './utils/authProvider';
import { AuthRoute } from './components/AuthRoute';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Experiment } from './pages/Experiment';
import { Navbar } from './components/Navbar';

export const App = () => {
    // todo:
    // check confirmation email toast after signup

    return (
        <AuthProvider>
            <div className="App">
                <Navbar />
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
