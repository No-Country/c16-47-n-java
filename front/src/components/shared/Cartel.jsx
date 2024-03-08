import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { generarOrden } from "./AppServicio";

function Cartel({ productsCart, setProductsCart }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  function eliminar(idCart) {
    const newProductsCart = productsCart.filter((p) => p.idCart !== idCart);
    setProductsCart(newProductsCart);
    localStorage.setItem("productsCart", productsCart);
  }

  async function guardarOrden(e) {
    e.preventDefault();
    let total = 0;
    productsCart.forEach((p, i) => {
      total += parseFloat(p.price) * parseFloat(p.cant);
      console.log(`El total hasta el momento en ${i} iteración es: ${total}`)
    });
    const userRequest = {
      idUser: user.id,
      orderDate: null,
      products: productsCart,
      total: total.toString(),
    };
    console.log("*************************************************");
    console.log(`El total del useRequest es: ${userRequest.total}`);
    console.log("*************************************************");
    localStorage.setItem("orden", JSON.stringify(userRequest));
    console.log(localStorage.getItem("orden"));
    try {
      localStorage.setItem("productsCart", null);
      setProductsCart([]);
      await generarOrden(userRequest, localStorage.getItem("token"));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative">
      {productsCart == null ? (
        <></>
      ) : (
        productsCart.length > 0 && (
          <div className="cartel bg-[#e2e2e2] p-2 border border-gray-200 absolute rounded-sm flex flex-col z-50">
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
              onClick={guardarOrden}
              className="text-gray-100 bg-gray-700 rounded-md"
            >
              Comprar
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Cartel;
