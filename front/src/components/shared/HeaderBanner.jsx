import { Link } from "react-router-dom";

const HeaderBanner = () => {
  return (
    <header className="bg-white text-white py-4 flex justify-between items-center w-full">
      <div className="flex justify-center">
        <img src="/src/assets/img/Logo.png" alt="Logo" className="h-20 ml-8" />
      </div>
      <nav className="flex pr-8">
        <ul className="flex mb-4">
          <Link className="mr-5" to="/">
            Home
          </Link>
          <Link className="mr-5" to="/contacto">
            Contacto
          </Link>
          <Link className="mr-5" to="/user">
            Editar Perfil
          </Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderBanner;
