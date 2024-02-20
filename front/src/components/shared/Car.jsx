import React, { useState } from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Card = (props) => {
  const { showOrder, setShowOrder } = props;
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setProductosEnCarrito([...productosEnCarrito, producto]);
    console.log(`Se agregó ${producto.nombre} al carrito.`);
  };

  return (
    <div
      className={`lg:col-span-2 absolute top-0 bg-[#a6d47c] w-full lg:w-96 lg:h-auto lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-black-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Pedido</h1>
    
        {/* Car */}
        
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Cant.</h5>
            <h5>Precio</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
            {productosEnCarrito.map((producto, index) => (
              <div key={index} className="bg-[#a6d47c] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img
                      src={producto.imagen.url}
                      className="w-10 h-10 object-cover"
                    />
                    <div>
                      <h5 className="text-sm">{producto.nombre}</h5>
                      <p className="text-xs text-gray-500">
                        ${producto.precio}
                      </p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>{producto.cantidad}</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>${producto.precio * producto.cantidad}</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..."
                    />
                  </form>
                  <div>
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-[#262837] relative w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>
              ${productosEnCarrito.reduce(
                (total, producto) => total + producto.precio * producto.cantidad,
                0
              )}
            </span>
          </div>
          <div>
            <button className="bg-[#06d6a0] w-full py-2 px-4 rounded-lg">
              PAGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;