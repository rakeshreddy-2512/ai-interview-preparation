import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CodingPractice from './pages/CodingPractice';
import MockInterviews from './pages/MockInterviews';
import ProgressTracking from './pages/ProgressTracking';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/practice" element={<CodingPractice />} />
                <Route path="/mock-interviews" element={<MockInterviews />} />
                <Route path="/progress" element={<ProgressTracking />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
