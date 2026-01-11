import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />  
        {/*react automatically reatds it as 
        ProtectedRoute({
        children: <Dashboard />
         }) so children is dashboard component which is passed as props in protected routes */}
      </Routes>
    </>
  );
}

export default App; 