import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // limpa o token do contexto e do localStorage
    navigate("/login");
  };

  return (
    <nav style={{ background: "#333", padding: "10px", color: "white" }}>
      <Link to="/contatos" style={{ color: "white", marginRight: "10px" }}>
        Contatos
      </Link>
      {!token ? (
        <>
          <Link to="/login" style={{ color: "white", marginRight: "10px" }}>
            Login
          </Link>
          <Link to="/registrar" style={{ color: "white" }}>
            Registrar
          </Link>
        </>
      ) : (
        <button onClick={handleLogout}>Sair</button>
      )}
    </nav>
  );
}