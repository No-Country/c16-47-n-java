import { useEffect, useState } from "react";

function ProductCard({ product }) {
  const { id, name, description, price, stock, imageUrl, califications } = product;
  const [calificacion, setCalificacion] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [mostrarCompleto, setMostrarCompleto] = useState(false);

  // salidas por terminal para manejo de errores
  useEffect(() => {
    console.log(`id: ${id}, nombre: ${name}, descripcion: ${description}, precio: ${price}, stock: ${stock}, url de imagen: ${imageUrl}, calificaciones: ${califications}`)
  },[])

  const manejarCambioCalificacion = (nuevaCalificacion) => {
    setCalificacion(nuevaCalificacion);
  };

  const manejarFavorito = () => {
    setFavorito(!favorito);
  };

  const manejarCambioCantidad = (e) => {
    const nuevaCantidad = parseInt(e.target.value);
    setCantidad(nuevaCantidad);
  };

  const mostrarCardCompleta = () => {
    setMostrarCompleto(true);
  };

  const ocultarCardCompleta = () => {
    setMostrarCompleto(false);
  };

  const handleAgregarAlCarrito = () => {
      setCantidad(...cantidad, cantidad)
  };

  return (
    <div className="bg-white p-8 rounded-xl flex flex-col items-center gap-2 text-center text-black font-roboto relative border-t-2 border-r-2 border-b-2 border-l-2 border-[#ff9a36] border-t-[#a1bb23] border-r-[#a1bb23] border-b-[#ff9a36]" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}>
      <div className="w-40 h-40 overflow-hidden rounded-lg relative">
        <div className="border">
        <img
          src={imageUrl}
          className="object-cover w-full h-full"
          alt="Product"
        />
        </div>

        <div className="manejarFavorito" onClick={manejarFavorito}>
          {favorito ? "❤️" : "🤍"}
        </div>
      </div>
      <p className="text-xl">{name}</p>
      {!mostrarCompleto && (
        <button className="text-[#a1bb23] text-sm py-2 px-4 rounded-xl border border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white" onClick={mostrarCardCompleta}>Ver más</button>
      )}
      {mostrarCompleto && (
        <>
          <button className="absolute top-4 right-4 text-gray-600" onClick={ocultarCardCompleta}>X</button>
          <p className="text-gray-500">{description}</p>
          <div className="flex items-center">
            <div className="text-xl text-black mr-2 font-bold">${price}</div>
            <button className="text-[#a1bb23] text-sm py-2 px-4 rounded-xl border border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white" onClick={handleAgregarAlCarrito}>AGREGAR</button>
          </div>
          <p className="text-gray-600">{stock} disponibles</p>

          <div>
            <label htmlFor="cantidad" className="mr-2">Cantidad:</label>
            <input
              type="number"
              id="cantidad"
              value={cantidad}
              min={1}
              max={stock}
              onChange={manejarCambioCantidad}
              className="border border-gray-300 text-gray-600 rounded-md px-3 py-2 w-20 text-center"
            />
          </div>
          <div>
            <p>Calificación:</p>
            {[1, 2, 3, 4, 5].map((estrella) => (
              <span
                key={estrella}
                onClick={() => manejarCambioCalificacion(estrella)}
                style={{ color: estrella <= calificacion ? "gold" : "gray", cursor: "pointer" }}
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