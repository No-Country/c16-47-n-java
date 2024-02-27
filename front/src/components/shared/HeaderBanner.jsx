import { useState } from "react";
import UserProfile from "./UserProfile";

const HeaderBanner = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  const [userData, setUserData] = useState({
    id: 1,
    username: "usuario1",
    email: "email1@gmail.com",
    imagen: {
      id: 1,
      url: "/src/assets/img/perfil1.jpg",
    },
  });

  const handleFileChange = (file) => {
    console.log("Archivo seleccionado:", file);
  };

  return (
    <header className="bg-white text-white py-4 flex justify-between items-center w-full">
      <div className="flex items-center">
        <img src="/src/assets/img/Logo.png" alt="Logo" className="h-20 ml-8" />
      </div>
      <div className="flex items-center mr-4 z-20">
        <UserProfile
          userData={userData}
          showProfile={showUserProfile}
          toggleProfile={toggleUserProfile}
          onFileChange={handleFileChange}
          setUserData={setUserData}
        />
      </div>
    </header>
  );
};

export default HeaderBanner;
