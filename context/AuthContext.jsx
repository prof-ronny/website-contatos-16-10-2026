import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Salva o token e atualiza o estado
  const login = (token) => {
	// Aqui também é possível decodificar o token JWT para
	// extrair informações do usuário (como nome ou email)
	// usando a biblioteca `jwt-decode` e armazená-las no estado/contexto.
    localStorage.setItem("token", token);
    setToken(token);
  };

  // Remove o token ao sair
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}