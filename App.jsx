import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Contatos from "./pages/Contatos";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { createRoot } from "react-dom/client";

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contatos" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route
            path="/contatos"
            element={
              <PrivateRoute>
                <Contatos />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const container =document.getElementById('root');
if(container){
    const root = createRoot(container);
    root.render(<App/>);
}