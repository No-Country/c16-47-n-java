import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Cartel({ productsCart, setProductsCart }) {
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  function eliminar(idCart) {
    setProductsCart((prevProductsCart) =>
      prevProductsCart.filter((p) => p.idCart !== idCart)
    );
  }

  async function guardarOrden(e) {
    // e.preventDefault();
    productsCart.forEach((p) => {
      setTotal(total + parseFloat(p.price) * parseFloat(p.cant));
    });
    const userRequest = {
      idUser: user.id,
      orderDate: null,
      products: productsCart,
      total: total.toString(),
    };
    localStorage.setItem("orden", JSON.stringify(userRequest));
    console.log(localStorage.getItem("orden"));
    try {
      await generarOrden(userRequest, localStorage.getItem("token"));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative">
      {productsCart.length > 0 && (
        <form
          onSubmit={(e) => guardarOrden(e)}
          className="cartel bg-[#e2e2e2] p-2 border border-gray-200 absolute rounded-sm flex flex-col z-50"
        >
          {productsCart.map((p) => (
            <div
              key={p.idCart}
              className="producto-carrito w-80 inline-flex carrito"
            >
              <img className="w-10 mr-2" src={p.imageUrl} alt={p.name} />
              <p className="nombreProducto min-w-44 my-auto">{p.name}</p>
              <p className="mr-2 my-auto min-w-3">{p.cant}</p>
              <p className="my-auto mx-2 min-w-10 text-[#1e6415] font-semibold">
                ${p.price}
              </p>
              <button
                className=""
                type="button"
                onClick={() => eliminar(p.idCart)}
              >
                <FaTrash className="" />
              </button>
            </div>
          ))}
          <button
            type="submit"
            className="text-gray-100 bg-gray-700 rounded-md"
          >
            Comprar
          </button>
        </form>
      )}
    </div>
  );
}

export default Cartel;
