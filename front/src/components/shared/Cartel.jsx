import { useState } from "react";

function Cartel({ productsCart, setProductsCart }) {

  function generarOrden(e) {
    e.preventDefault();
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
            <section key={p.idCart} className="producto-carrito inline-flex carrito">
              <p className="nombreProducto">{p.name}</p>
              <img className="w-10 mr-2" src={p.imageUrl} alt={p.name} />
              <p className="mr-2">cantidad: {p.cant}</p>
              <p>${p.price}</p>
            </section>
          ))}
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
}

export default Cartel;
