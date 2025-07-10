import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Loader from "./componants/Loader";
import { Suspense, lazy } from "react";

// Lazy-loaded pages
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Hero = lazy(() => import("./pages/Hero"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />

           <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

