import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [calificacion, setCalificacion] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [mostrarCompleto, setMostrarCompleto] = useState(false);

  const manejarCambioCalificacion = (nuevaCalificacion) => {
    setCalificacion(nuevaCalificacion);
  };

  const manejarFavorito = () => {
    setFavorito(!favorito);
  };

  const manejarCambioCantidad = (e) => {
    console.log("La cantidad a elegir es "+e)
    setCantidad(e);
  };

  const mostrarCardCompleta = () => {
    setMostrarCompleto(true);
  };

  const ocultarCardCompleta = () => {
    setMostrarCompleto(false);
  };

  const handleAgregarAlCarrito = () => {
    addToCart(product, parseInt(cantidad)); // Llamada a la función addToCart con el producto actual
  };

  return (
    <div
      className="bg-[#404040] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-black font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]"
      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="w-40 h-40 overflow-hidden rounded-lg relative">
        <div className="border">
          <img
            src={product.imageUrl}
            className="object-cover w-full h-full"
            alt="Product"
          />
        </div>
        <div className="manejarFavorito" onClick={manejarFavorito}>
          {favorito ? "❤️" : "🤍"}
        </div>
      </div>
      <p className="text-xl text-white">{product.name}</p>
      <div className="flex items-center flex-col">
        <div className="text-xl text-[#a1bb23] mr-2 font-bold">
          ${product.price}
        </div>
      </div>
      {!mostrarCompleto && (
        <button
          className="text-[#a1bb23] text-sm py-2 px-4 rounded-xl border border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white"
          onClick={mostrarCardCompleta}
        >
          Ver más
        </button>
      )}
      {mostrarCompleto && (
        <>
          <button
            className="absolute top-4 right-4 text-gray-200"
            onClick={ocultarCardCompleta}
          >
            X
          </button>
          <button
            className="text-[#a1bb23] text-sm py-2 px-4 rounded-xl border border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white"
            onClick={handleAgregarAlCarrito}
          >
            AGREGAR
          </button>
          <p className="text-gray-300">{product.description}</p>
          <p className="text-gray-400">{product.stock} disponibles</p>
          <div>
            <label htmlFor="cantidad" className="text-gray-300 mr-2">
              Cantidad:
            </label>
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              min={1}
              max={product.stock}
              onChange={(e) => manejarCambioCantidad(e.target.value)}
              className="border border-gray-300 text-gray-600 rounded-md px-3 py-2 w-20 text-center"
            />
          </div>
          <div>
            <p className="text-gray-400">Calificación:</p>
            {[1, 2, 3, 4, 5].map((estrella) => (
              <span
                key={estrella}
                onClick={() => manejarCambioCalificacion(estrella)}
                style={{
                  color: estrella <= calificacion ? "gold" : "gray",
                  cursor: "pointer",
                }}
              >
                ★
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
