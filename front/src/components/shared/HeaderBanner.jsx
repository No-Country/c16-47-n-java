import { Link, useNavigate } from "react-router-dom";

const HeaderBanner = ({ user, setUser }) => {
  const navigate = useNavigate();

  function cerrarSesion() {
    setUser(null);
    navigate("/");
  }

  return (
    <div>
      <header className="bg-[#202020] text-white py-4 flex justify-between items-center w-full">
        <div className="flex justify-center">
          <Link to="/">
            <img
              src="/src/assets/img/Logo.png"
              alt="Logo"
              className="h-11 ml-8"
            />
          </Link>
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
              to="/nosotros"
              target="_blank"
            >
              Nosotros
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
                {user == null ? (
                  navigate("/")
                ) : (
                  <>
                    <Link
                      className="active:scale-[.98] hover:scale-[1.1] hover:text-[#ff9a36] mr-5"
                      to="/user"
                    >
                      Editar Perfil
                    </Link>
                    <Link className="active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23] mr-5">
                      <button onClick={cerrarSesion}>Cerrar Sesión</button>
                    </Link>
                  </>
                )}
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
        <p> </p>
      )}
    </div>
  );
};

export default HeaderBanner;
