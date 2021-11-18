import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/newAccount" element={<NewAccount />} />
                <Route exact path="/projects" element={<Projects />} />
              </Routes>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;

// 188 Enlace-a-Github-Servidor
// https://github.com/juanpablogdl/merntasks-servidor

// 188 Enlace-a-Github-Cliente
// https://github.com/juanpablogdl/MERNTASKS-cliente

// 188 Enlace-al-Gist
// https://gist.github.com/juanpablogdl/5fb3278ba3b68d23267393abd7d1d605

// 190 Enlace-al-gist
// https://gist.github.com/juanpablogdl/5fb3278ba3b68d23267393abd7d1d605
