import { useEffect, useState } from "react";

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

  async function generarOrden(e) {
    productsCart.forEach((p) => {
      setTotal(total + parseFloat(p.price) * parseFloat(p.cant));
    });
    console.log(total);
    e.preventDefault();
    const userRequest = {
      idUser: user.id,
      orderDate: null,
      products: productsCart,
      total: total,
    };
    try {
      await generarOrden(userRequest, localStorage.getItem("token"));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative">
      <div className="hover:scale-[1.1]"></div>
      {productsCart.length > 0 && (
        <form
          onSubmit={(e) => generarOrden(e)}
          className="cartel absolute top-11 bg-white p-4 border border-gray-300 shadow z-10"
        >
          {productsCart.map((p) => (
            <section
              key={p.idCart}
              className="producto-carrito inline-flex carrito"
            >
              <p className="nombreProducto">{p.name}</p>
              <img className="w-10 mr-2" src={p.imageUrl} alt={p.name} />
              <p className="mr-2">cantidad: {p.cant}</p>
              <p>${p.price}</p>
              <button type="button" onClick={() => eliminar(p.idCart)}>
                Quitar
              </button>
            </section>
          ))}
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
}

export default Cartel;
