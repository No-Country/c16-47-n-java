import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderBanner from "./components/shared/HeaderBanner";
import Productos from "./components/shared/Productos";
import Contacto from "./components/shared/Contacto";
import Login from "./components/shared/Login";
import "./App.css";
import Footer from "./components/shared/Footer";
import UserProfile from "./components/shared/UserProfile";
import { traerUsuario } from "./components/shared/AppServicio";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  useEffect(
    () => {
      async function traerUser() {
        try {
          const res = await traerUsuario(token);
          const data = res.json();
          setUser(data);
        } catch (error) {
          console.log("No se pudo traer el usuario. Error: " + error);
        }
      }
      traerUser();
    },
    [],
    user
  );

  return (
    <Router>
      <div className="w-full">
        <HeaderBanner user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/user" element={<UserProfile token={token} />} />
          <Route path="/login" element={<div id="login"><Login setToken={setToken} /></div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
