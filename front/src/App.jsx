import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeaderBanner from "./components/shared/HeaderBanner";
import Productos from "./components/shared/Productos";
import Contacto from "./components/shared/Contacto";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <Router>
      <div className="bg-white w-full min-h-screen">
        <HeaderBanner showProfile={showProfile} toggleProfile={toggleProfile} />
        <nav className="flex justify-end pr-8 shadow-md mb-4">
          <ul className="flex mb-4">
            <li className="mr-4">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/" element={<div className="flex justify-center mt-8"><Productos /></div>}>
              {/* <Route index element={<div className="flex justify-center mt-8"><Hero /></div>} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;