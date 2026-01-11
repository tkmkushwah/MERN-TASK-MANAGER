import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Brand / App Name */}
      <h3>MERN Task App</h3>

      {/* Links */}
      <div className="nav-left">
        {!token ? (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}
      </div>

      {/* Logout Button */}
      {token && (
        <div className="nav-right">
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;