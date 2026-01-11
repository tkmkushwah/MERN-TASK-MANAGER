import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h3>MERN Task App</h3>

      <div>
        {!token ? (
          <>
            <Link style={styles.link} to="/">Login</Link>
            <Link style={styles.link} to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link style={styles.link} to="/dashboard">Dashboard</Link>
            <button onClick={logout} style={styles.button}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "white"
  },
  link: {
    marginRight: "15px",
    color: "white",
    textDecoration: "none"
  },
  button: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default Navbar;