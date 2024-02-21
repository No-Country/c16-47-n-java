import React, { useState } from "react";
import { FaPen, FaCamera } from "react-icons/fa"; // Importa los íconos de lápiz y cámara

const UserProfile = ({
  userData,
  showProfile,
  toggleProfile,
  onFileChange,
  onSaveUser,
}) => {
  const { id, username, email, imagen } = userData;
  const [profileImage, setProfileImage] = useState(imagen.url); // Estado para la imagen de perfil
  const [editing, setEditing] = useState(false);
  const [usernameInput, setUsernameInput] = useState(username);
  const [emailInput, setEmailInput] = useState(email);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
    const reader = new FileReader(); // Crea un objeto FileReader
    reader.onload = () => {
      const url = reader.result; // Obtiene la URL de la imagen cargada
      setProfileImage(url); // Actualiza la imagen de perfil en el estado
      onFileChange(file); // Llama a la función onFileChange para manejar el archivo cargado
    };
    reader.readAsDataURL(file); // Lee el archivo como una URL
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onSaveUser(id, usernameInput, emailInput);
    setEditing(false);
  };

  return (
    <div className="relative">
      {/* User profile photo to trigger profile visibility */}
      <div
        className="h-16 w-16 rounded-full cursor-pointer overflow-hidden"
        onClick={toggleProfile}
      >
        <img
          src={profileImage} // Usa la imagen de perfil del estado
          alt={username}
          className="h-full w-full rounded-full object-cover border-none"
        />
      </div>

      {/* UserProfile component */}
      {showProfile && (
        <div className="absolute right-0 mt-20 bg-black bg-opacity-75 w-48 p-4 rounded-lg shadow-lg">
          <div
            className={`h-16 w-16 rounded-full cursor-pointer overflow-hidden mb-2 ${
              editing ? "" : "pointer-events-none"
            }`}
            onClick={() => {
              if (editing) {
                document.getElementById("fileInput").click();
              }
            }}
            style={{ position: "relative" }}
          >
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {editing && (
              <FaCamera className="absolute bottom-0 right-1 transform -translate-x-1/2 -translate-y-1/2 text-teal-500 text-1xl" />
            )}
            <label htmlFor="fileInput">
              <img
                src={profileImage} // Usa la imagen de perfil del estado
                alt={username}
                className="h-full w-full rounded-full object-cover border-none"
              />
            </label>
          </div>
          <div className="flex items-center mb-2">
            {editing ? (
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="text-gray-800 font-semibold w-32 border border-gray-400 rounded p-1"
              />
            ) : (
              <span className="text-white-800 font-semibold">{username}</span>
            )}
          </div>
          <div className="text-white-600 mb-2">
            {editing ? (
              <input
                type="text"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-32 border border-gray-400 rounded p-1"
              />
            ) : (
              `Email: ${email}`
            )}
          </div>
          <div>
            {editing ? (
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
              >
                Guardar
              </button>
            ) : (
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleEdit}
              >
                <FaPen /> Editar
              </button>
            )}
          </div>
          
        </div>
      )}
    </div>
  );
};

export default UserProfile;
