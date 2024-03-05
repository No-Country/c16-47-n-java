import { useState } from "react";

const Cartel = ({ productName }) => {
  return (
    <div>
      {productName ? (
        <p>{productName} agregado al carrito</p>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Cartel;
