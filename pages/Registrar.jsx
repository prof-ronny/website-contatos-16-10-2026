import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await api.post("/usuarios/registrar", { nome, email, senha });
      alert("Usuário criado com sucesso!");
      navigate("/login");
    } catch {
      alert("Erro ao registrar. Tente outro e-mail.");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Registrar</h2>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}