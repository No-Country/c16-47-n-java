import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-end pr-8 shadow-md">
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
  );
}
export default Navbar;
