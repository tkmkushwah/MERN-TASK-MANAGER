import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {  {/* children is dashboard component which is passed as props in protected routes */}
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;