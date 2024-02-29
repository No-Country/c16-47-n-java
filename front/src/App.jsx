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
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <Router>
      <div className="w-full min-h-screen">
        <HeaderBanner showProfile={showProfile} toggleProfile={toggleProfile} />

        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/user" element={<UserProfile />} />
          <Route
            path="/login"
            element={
              <div id="login">
                <Login />
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
