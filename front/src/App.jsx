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
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function traerUser() {
      try {
        const data = await traerUsuario(localStorage.getItem("token"));
        setUser(data);
      } catch (error) {
        console.log("No se pudo traer el usuario. Error: " + error);
      }
    }
    traerUser();
  }, [localStorage]);

  return (
    <Router>
      <div className="w-full">
        <HeaderBanner user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/user"
            element={<UserProfile user={user} setUser={setUser} />}
          />
          <Route
            path="/login"
            element={
              <div id="login">
                <Login/>
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
