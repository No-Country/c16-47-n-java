import React, { useState } from "react";
import Cartel from "./Cartel";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [addedProductId, setAddedProductId] = useState(null);
  const [products, setProducts] = useState([]); // Agregar estado para almacenar todos los productos

  const toggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };

  // Función para encontrar el producto por su ID
  const findProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  // Función para agregar un producto al carrito
  const addToCart = (productId) => {
    setAddedProductId(productId);
    setCartOpen(true);
  };

  // Obtener el producto agregado al carrito
  const addedProduct = addedProductId ? findProductById(addedProductId) : null;

  // Extraer nombre y precio del producto agregado
  const productName = addedProduct ? addedProduct.name : "";
  const productPrice = addedProduct ? addedProduct.price : "";

  return (
    <div className="relative">
      <div className="hover:scale-[1.1]" onClick={toggleCart}></div>
      {cartOpen && addedProduct && (
        <div className="cartel absolute top-11 bg-white p-4 border border-gray-300 shadow w-60 z-50">
          <Cartel productName={productName} productPrice={productPrice} />
        </div>
      )}
    </div>
  );
};

export default Cart;
