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
          className="cartel absolute top-11 bg-white p-4 border border-gray-300 shadow w-60 z-50"
        >
          {productsCart.map((p) => (
            <section key={p.idCart} className="border-red-900 inline-flex">
              <p>{p.name}</p>
              <img className="w-10" src={p.imageUrl} alt={p.name} />
              <p>cantidad: {p.cant} </p>
              <p>${p.price}</p>
              <hr className=""/>
            </section>
          ))}
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
}

export default Cartel;
