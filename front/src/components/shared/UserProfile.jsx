import { useState, useEffect } from "react";
import { guardarCambios, guardarImagen, traerOrdenes } from "./AppServicio";
import { FaCamera } from "react-icons/fa";

const CameraIcon = ({ onClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "19px",
        right: "145px",
        background: "#a1bb23",
        borderRadius: "50%",
        padding: "3px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaCamera size={16} color="gray" />
    </div>
  );
};

const UserProfile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [orders, setOrders] = useState([]);
  const [avatar, setAvatar] = useState(user.imageUrl);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [cellphone, setCellphone] = useState(user.cellphone);
  const [file, setFile] = useState(null);
  const [datos, setDatos] = useState(false);
  const [showImageEditor, setShowImageEditor] = useState(false);

  useEffect(() => {
    localStorage.setItem("avatar", avatar);
  }, [avatar]);

  useEffect(() => {
    traerOrdenes(user.id, localStorage.getItem("token")).then((data) =>
      setOrders(data)
    );
  }, []);

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
      setUser({ ...user, name, address, cellphone });
    } catch (error) {
      console.log("Hubo un error al guardar cambios. Error: " + error);
    }
    setDatos(!datos);
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function cambiarAvatar(e) {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      await guardarImagen(user.id, formData, localStorage.getItem("token"));

      setAvatar(URL.createObjectURL(file));
      setFile(null);
      setShowImageEditor(false);
    }
  }

  function editar() {
    setDatos(!datos);
  }

  return (
    <section className="bg-[#181818] p-6 relative">
      <div
        className="mt-5 mb-10 max-w-md mx-auto bg-[#323232] text-black p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]"
        style={{
          borderRadius: "15px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="p-4 relative">
          <img
            className="h-32 w-32 mx-auto rounded-full"
            src={avatar}
            alt="User Avatar"
          />
          <CameraIcon onClick={() => setShowImageEditor(true)} />
        </div>
        {datos ? (
          <>
            <form className="align-center px-4 py-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 block w-full border bg-[#222222]  text-gray-300 border-[#ff9a36] rounded-md focus:outline-[#ff9a36] focus:border-[#a1bb23]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="address"
                className="mt-2 block text-sm font-medium text-gray-300"
              >
                Dirección
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 p-2 block w-full border bg-[#222222]  text-gray-300 border-[#ff9a36] rounded-md focus:outline-[#bb7e23] focus:border-[#a1bb23]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label
                htmlFor="cellphone"
                className="mt-2 block text-sm font-medium text-gray-300"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="cellphone"
                className="mt-1 p-2 block w-full border bg-[#222222]  text-gray-300 border-[#ff9a36] rounded-md focus:outline-[#bb7e23] focus:border-[#a1bb23]"
                value={cellphone}
                onChange={(e) => setCellphone(e.target.value)}
              />

              <button
                onClick={cambiarDatos}
                className="w-full mt-8 mb-4 active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
              >
                Guardar cambios
              </button>
              <button
                onClick={editar}
                className="w-full mb-4 active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
              >
                Cancelar
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col text-center">
            <p className="text-gray-200 text-lg font-semibold">{name}</p>
            <p className="text-gray-300">Dirección: {address}</p>
            <p className="text-gray-300">Teléfono: {cellphone}</p>
            <button
              onClick={editar}
              className="mt-2 mb-4 active:scale-[.98] hover:scale-[1.01] py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
            >
              Editar
            </button>
          </div>
        )}
        {showImageEditor && (
          <div
            className="fixed inset-0 z-10 flex items-center justify-center bg-white bg-opacity-30"
            onClick={() => setShowImageEditor(false)}
          >
            <form
              onClick={(e) => e.stopPropagation()}
              onSubmit={cambiarAvatar}
              className="max-w-md bg-[#181818] p-8 rounded-xl shadow-lg "
            >
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-300 mt-2"
              >
                Avatar
              </label>
              <input
                type="file"
                id="avatar"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none text-gray-300 focus:border-[#ff9a36]"
                onChange={handleFileChange}
              />
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                >
                  Guardar cambios
                </button>
                <button
                  type="button"
                  onClick={() => setShowImageEditor(false)}
                  className="px-4 py-2 rounded-xl bg-[#74BB23] text-white text-lg font-bold"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Sección de órdenes de usuario */}

      <section className="ordenes">
        <h2 className="text-white mt-5 mb-10 max-w-md mx-auto bg-[#323232]  p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]">
          Órdenes de compras realizadas
        </h2>
        {orders.length > 0 ? (
          <>
            <table className="text-left mx-auto bg-[#323232] p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]">
              <thead className="text-left align-middle">
                <tr>
                  <th className="text-white">Nº de Orden</th>
                  <th className="text-white">Fecha</th>
                  <th className="text-white">Total $</th>
                </tr>
              </thead>
              <tbody className="text-left">
                {orders.map((order, i) => (
                  <tr key={i}>
                    <td className="text-white">{order.id}</td>
                    <td className="text-white">{order.orderDate}</td>
                    <td className="text-white">${order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <p className="text-white mt-5 mb-10 max-w-md mx-auto bg-[#323232] p-6 font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]">
              No hay órdenes de compra
            </p>
          </>
        )}
      </section>
    </section>
  );
};

export default UserProfile;
