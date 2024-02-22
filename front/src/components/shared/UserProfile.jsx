import { useState } from "react";
import PropTypes from "prop-types";
import { FaCamera } from "react-icons/fa"; // Importa los íconos de

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
    <div>
      <div className="w-20 h-20 flex items-center justify-center">
        <div
          className="h-10 w-10 rounded-full cursor-pointer overflow-hidden"
          onClick={toggleProfile}
        >
          <img
            src={profileImage} // Usa la imagen de perfil del estado
            alt={username}
            className="h-10 w-10 rounded-full object-cover border-none"
          />
        </div>
      </div>
      {/* UserProfile component */}
      {showProfile && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={toggleProfile}
              >
                X
              </button>
            </div>
            <div className="mb-4">
              <div className="flex justify-center mb-2">
                <div
                  className={`h-32 w-32 rounded-full cursor-pointer overflow-hidden ${
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
                    onChange={(event) => handleFileChange(event.target.value)}
                  />
                  {editing && (
                    <FaCamera className="absolute bottom-0.5 right-2.5 transform -translate-x-1/2 -translate-y-1/2 text-green-500 text-2xl" />
                  )}
                  <label htmlFor="fileInput">
                    <img
                      src={profileImage} // Usa la imagen de perfil del estado
                      alt={username}
                      className="h-full w-full rounded-full object-cover border-none"
                    />
                  </label>
                </div>
              </div>
              <div className="text-center mb-2">
                {editing ? (
                  <input
                    required
                    type="text"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className="text-gray-500 font-semibold w-full border border-gray-400 rounded p-2"
                  />
                ) : (
                  <span className="text-gray-800 font-semibold">
                    {username}
                  </span>
                )}
              </div>
              <div className="text-center mb-4">
                {editing ? (
                  <input
                    required
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="text-gray-500 font-semibold w-full border border-gray-400 rounded p-2"
                  />
                ) : (
                  <span className="text-gray-800">{email}</span>
                )}
              </div>
              <div className="flex justify-center">
                {editing ? (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={handleSave}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={handleEdit}
                  >
                    Editar
                  </button>
                )}
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={toggleProfile}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

UserProfile.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    imagen: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showProfile: PropTypes.bool.isRequired,
  toggleProfile: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
  onSaveUser: PropTypes.func.isRequired,
};

export default UserProfile;
