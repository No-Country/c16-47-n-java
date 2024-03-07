import { Link, useNavigate } from "react-router-dom";
import logo from "/src/assets/img/Logo.png";
import banner from "/src/assets/img/banner.jpg";

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
            <img src={logo} alt="Logo" className="h-11 ml-8" />
          </Link>
        </div>
        <nav className="flex pr-8">
          <ul className="flex flex-col sm:flex-row sm:gap-3 my-0 py-0">
            <li className="lg:mr-5 mb-2">
              <Link
                className="text-white active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23]"
                to="/"
              >
                EcoBite
              </Link>
            </li>
            <li className="lg:mr-5 mb-2">
              <Link
                className="text-white active:scale-[.98] hover:scale-[1.1] hover:text-[#ff9a36]"
                to="/contacto"
              >
                Contacto
              </Link>
            </li>
            <li className="lg:mr-5 mb-2">
              <Link
                className="text-white active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23]"
                to="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            {/* Logica de login/logout */}
            {user == null ? (
              <li>
                <Link
                  className="text-white active:scale-[.98] hover:scale-[1.1] hover:text-[#ff9a36]"
                  to="/login"
                >
                  Ingresar
                </Link>
              </li>
            ) : (
              <>
                <li className="lg:mr-5 mb-2">
                  <Link
                    className="text-white active:scale-[.98] hover:scale-[1.1] hover:text-[#ff9a36]"
                    to="/user"
                  >
                    Perfil
                  </Link>
                </li>
                <li>
                  <button
                    onClick={(e) => cerrarSesion(e)}
                    className="active:scale-[.98] hover:scale-[1.1] hover:text-[#a1bb23]"
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <img
        src={banner}
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
