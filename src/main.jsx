import React  from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav.jsx";
import "/src/style/main.css";
import { Home } from "./components/Home.jsx";
import { Edu } from "./components/Edu.jsx";
import { Proyectos } from "./components/proyectos.jsx";
import { Skills } from "./components/Skills.jsx";
import "./configuracion/i18n";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
 
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Proyectos />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Edu />} />
    </Routes>
  </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
