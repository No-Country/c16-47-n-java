import {  useEffect, useState } from "react";
import { guardarCambios, guardarImagen } from "./AppServicio";

const UserProfile = ({ user, setUser}) => {
  const [avatar, setAvatar] = useState(user.imageUrl);
  const [name, setName] = useState(user.name);
  const [address, setAddres] = useState(user.address);
  const [cellphone, setCellphone] = useState(user.cellphone);
  const [file, setFile] = useState(null);

  async function cambiarDatos(e) {
    e.preventDefault();
    const changes = {
      id: user.id,
      name: name,
      address: address,
      cellphone: cellphone,
    };
    try {
      await guardarCambios(changes, localStorage.getItem("token"));
    } catch (error) {
      console.log("Hubo un error al guardar cambios. Error: " + error);
    }
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function cambiarAvatar(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("image", file);

    await guardarImagen(user.id, formData, localStorage.getItem("token"));
  }

  return (
    <section className="bg-[#181818] p-6">
      <div
        className="mt-5 max-w-md mx-auto bg-[#323232] text-black p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]"
        style={{
          borderRadius: "15px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="p-4">
          <img
            className="h-32 w-32 mx-auto rounded-full"
            src={avatar}
            alt="User Avatar"
          />
          <div className="text-center mt-4">
            <h1 className="text-xl text-white font-semibold">{name}</h1>
          </div>
        </div>
        <form onClick={cambiarDatos} method="POST" className="px-4 py-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-300"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={address}
            onChange={(e) => setAddres(e.target.value)}
          />
          <label
            htmlFor="cellphone"
            className="block text-sm font-medium text-gray-300"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="cellphone"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-8 mb-4 active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
          >
            Guardar cambios
          </button>
        </form>
        <form onSubmit={cambiarAvatar} method="POST">
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-300 mt-2"
          >
            Avatar
          </label>
          <input
            type="file"
            // formEncType="multipart/form-data"
            // name="avatar"
            id="avatar"
            // accept="image/*"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange}
          />
          <button
            type="submit"
            className="w-full mt-8 mb-4 active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
          >
            Guardar cambios
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
