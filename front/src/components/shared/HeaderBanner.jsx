import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/img/Logo.png";

const HeaderBanner = ({ user, setUser }) => {
  const navigate = useNavigate();

  function cerrarSesion(e) {
    e.preventDefault();
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
    setUser(null);
    navigate("/");
  }

  return (
    <div>
      <header className="bg-[#202020] text-white py-3 flex justify-between items-center w-full">
        <div className="flex justify-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-11 ml-8"
            />
          </Link>
        </div>
        <nav className="flex pr-8">
          <ul className="flex text-white ">
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
                      Perfil
                    </Link>
                    <Link className="active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23] mr-5">
                      <button onClick={(e) => cerrarSesion(e)}>
                        Cerrar Sesión
                      </button>
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
        <p id="hola">Hola de nuevo, {user.name}</p>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default HeaderBanner;
