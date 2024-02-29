import { useEffect, useState } from "react";
import { guardarCambios, traerUsuario } from "./AppServicio";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddres] = useState("");
  const [cellphone, setCellphone] = useState("");

  useEffect(() => {
    async function perfil(e) {
      e.preventDefault();
      try {
        await traerUsuario().then((data) => setUser(data));
        console.log("Usuario traido desde UserProfile: " + user)
      } catch (error) {
        console.log("Hubo un error al cargar el usuario. Error: " + error);
      }
    }
    perfil()
  }, []);

  async function cambiarDatos(e) {
    e.preventDefault();
    setUser({
      name: name,
      email: email,
      address:address,
      cellphone: cellphone
    })
    try {
      await guardarCambios(user)
    } catch (error) {
      console.log("Hubo un error al guardar cambios. Error: " + error);
    }
  }

  const cambiarAvatar = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <section className="bg-[#e4e9ec] p-6">
      <div
        className="mt-5 max-w-md mx-auto bg-white text-black p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]"
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
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>
        <form onClick={cambiarDatos} method="POST" className="px-4 py-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
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
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <input
            type="text"
            id="address"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={address}
            onChange={(e) => setAddres(e)}
          />
          <input
            type="text"
            id="cellphone"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={cellphone}
            onChange={(e) => setCellphone(e)}
          />

          <button
            type="submit"
            className="w-full mt-8 mb-4 active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
          >
            Guardar cambios
          </button>
        </form>
        <form onClick={cambiarAvatar} method="POST">
          <label
            htmlFor="avatar"
            className="block text-sm font-medium text-gray-700 mt-2"
          >
            Avatar
          </label>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setAvatar(e)}
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
