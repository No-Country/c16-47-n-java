import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderBanner from "./components/shared/HeaderBanner";
import Productos from "./components/shared/Productos";
import Contacto from "./components/shared/Contacto";
import Login from "./components/shared/Login";
import "./App.css";
import Footer from "./components/shared/Footer";
import UserProfile from "./components/shared/UserProfile";

function App() {
  const [token, setToken] = useState("");


  return (
    <Router>
      <div className="w-full">
        <HeaderBanner token={token} />

        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/user" element={<UserProfile token={token} />} />
          <Route
            path="/login"
            element={
              <div id="login">
                <Login token={token} setToken={setToken} />
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
