import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeaderBanner from "./components/shared/HeaderBanner";
import Productos from "./components/shared/Productos";
import Contacto from "./components/shared/Contacto";
import Login from "./components/shared/Login";
import "./App.css";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <Router>
      <div className="bg-white w-full min-h-screen">
        <HeaderBanner showProfile={showProfile} toggleProfile={toggleProfile} />
        <nav className="flex justify-end pr-8 shadow-md">
          <ul className="flex mb-4">
            <Link className="mr-4" to="/">
              Home
            </Link>
            <Link className="mr-4" to="/contacto">
              Contacto
            </Link>
            <Link to="/login">Login</Link>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route
              path="/contacto"
              element={
                <div className="bg-[#e4e9ec] p-6">
                  <Contacto />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <div
                  id="productos"
                  className="flex justify-center bg-cover"
                  style={{
                    backgroundImage:
                      'url("src/assets/img/fondo-productos.jpg")',
                  }}
                >
                  <Productos />
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
