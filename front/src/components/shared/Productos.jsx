import { useEffect, useState } from "react";
import { traerProductos } from "./AppServicio";
import ProductCard from "./ProductCard";

function Productos() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  useEffect(() => {
    traerProductos().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  const handleFiltroCategoria = (categoria) => {
    if (categoria === "todos") {
      setCategoriaSeleccionada("todos");
      setFilteredProducts(products);
    } else {
      const productosFiltrados = products.filter(
        (product) => product.category && product.category === categoria
      );
      setCategoriaSeleccionada(categoria);
      setFilteredProducts(productosFiltrados);
    }
  };

  return (
    <section id="productos" className="flex flex-col items-center bg-[#181818]">
      <div className="flex flex-wrap gap-4 m-4 justify-center">
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "todos" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("todos")}
        >
          Todos
        </button>
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "FRUTAS" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("FRUTAS")}
        >
          Frutas
        </button>
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "VERDURAS" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("VERDURAS")}
        >
          Verduras
        </button>
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "CARNES" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("CARNES")}
        >
          Carnes
        </button>
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "LACTEOS" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("LACTEOS")}
        >
          Lacteos
        </button>
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "PANADERIA" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("PANADERIA")}
        >
          Panaderia
        </button>
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "PESCADO" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("PESCADO")}
        >
          Pescado
        </button>
        <button
          className={`py-2 px-4 rounded-xl border text-white border-gray-500 transition duration-300 ease-in-out hover:bg-[#a1bb23] hover:text-white ${
            categoriaSeleccionada === "LEGUMBRES" && "bg-[#a1bb23] text-white"
          }`}
          onClick={() => handleFiltroCategoria("LEGUMBRES")}
        >
          Legumbres
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8 max-h-[90vh] overflow-y-auto m-8 bg-[#232323] scrollbarr border-x-2 border-x-[#676759]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-400">No hay productos disponibles</p>
        )}
      </div>
    </section>
  );
}

export default Productos;
