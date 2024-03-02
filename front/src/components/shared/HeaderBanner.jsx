import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { traerUsuario } from "./AppServicio";

const HeaderBanner = ({token}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function traerUser() {
      try {
        const res = await traerUsuario(token)
        const data = res.json()
        setUser(data)
      } catch (error) {
        console.log("No se pudo traer el usuario. Error: " + error)
      }
    }
    traerUser()
  }, []);

  return (
    <div>
      <header className="bg-[#202020] text-white py-4 flex justify-between items-center w-full">
        <div className="flex justify-center">
          <img
            src="/src/assets/img/Logo.png"
            alt="Logo"
            className="h-11 ml-8"
          />
        </div>
        <nav className="flex pr-8">
          <ul className="flex mb-4 text-white ">
            <Link
              className="active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23] mr-5"
              to="/"
            >
              EcoBite
            </Link>
            <Link
              className="active:scale-[.98] hover:scale-[1.1] hover:text-[#ff9a36] mr-5"
              to="/contacto"
            >
              Contacto
            </Link>
            <Link
              className="active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23] mr-5"
              to="/user"
            >
              Editar Perfil
            </Link>
            <Link
              className="active:scale-[.98] hover:scale-[1.1] hover:text-[#ff9a36]"
              to="/login"
            >
              Login
            </Link>
          </ul>
        </nav>
      </header>
      <img
        src="/src/assets/img/banner.jpg"
        alt="banner"
        className="lg:h-60 h-40 w-full object-cover"
      />
      {user !== null && user ? <p id="hola">Hola de nuevo {user.name}</p > : <p id="hola">NO USER</p>}
    </div>
  );
};

export default HeaderBanner;
