import { Button } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <BrowserRouter>
      {loading && (<div className="spinner-parent">
        <div className="spinner-border" role="status">
        </div>
      </div>)}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route 
        path="/" 
        element={
        <ProtectedRoute>
          <Home />
          </ProtectedRoute>
        } 
        />
        <Route 
        path="/apply-doctor" 
        element={
        <ProtectedRoute>
          <ApplyDoctor />
          </ProtectedRoute>
        } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
