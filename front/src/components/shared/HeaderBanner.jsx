import { Link, useNavigate } from "react-router-dom";

const HeaderBanner = ({ user, setUser }) => {
  const navigate = useNavigate()

  function cerrarSesion() {
    setUser(null)
    navigate("/")
  }

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

            {/* Logica de login/logout */}

            {user == null ? (
              <Link
                className="active:scale-[.98] hover:scale-[1.1] hover:text-[#ff9a36]"
                to="/login"
              >
                Ingresar
              </Link>
            ) : (
              <>
                <Link
                  className="active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23] mr-5"
                  to="/user"
                >
                  Editar Perfil
                </Link>
                <Link
                  className="active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23] mr-5"
                  onClick={cerrarSesion}
                >
                  Cerrar Sesión
                </Link>
              </>
            )}
          </ul>
        </nav>
      </header>
      <img
        src="/src/assets/img/banner.jpg"
        alt="banner"
        className="lg:h-60 h-40 w-full object-cover"
      />
      {user !== null && user ? (
        <p id="hola">Hola de nuevo {user.name}</p>
      ) : (
        <p id="hola">NO USER</p>
      )}
    </div>
  );
};

export default HeaderBanner;
