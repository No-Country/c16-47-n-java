import { useEffect, useState } from "react";
import { traerProductos } from "./AppServicio";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

function Productos() {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [orden, setOrden] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [idCart, setIdCart] = useState(0);

  useEffect(() => {
    traerProductos().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  function addToCart(prod, cant) {
    setIdCart(idCart+1)
    const newProduct = {
      id: prod.id,
      idCart: idCart,
      name: prod.name,
      price: prod.price,
      stock: prod.stock,
      cant: cant,
      imageUrl: prod.imageUrl,
    };
    try {
      setProductsCart([...productsCart, newProduct]);
    } catch (error) {
      console.log("No se puede agregar el producto. Error: " + error);
    }
    productsCart.length > 0
      ? console.log(productsCart)
      : console.log("No hay productos");
  }

  useEffect(() => {
    const productosFiltrados = products.filter((product) =>
      product.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFilteredProducts(productosFiltrados);
  }, [busqueda, products]);

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

  const handleOrdenChange = (e) => {
    const nuevoOrden = e.target.value;
    setOrden(nuevoOrden);
    if (nuevoOrden === "menor") {
      const productosOrdenados = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      setFilteredProducts(productosOrdenados);
    } else if (nuevoOrden === "mayor") {
      const productosOrdenados = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
      setFilteredProducts(productosOrdenados);
    }
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <section id="productos" className="flex flex-col items-center bg-[#181818]">
      <div className="flex flex-wrap gap-4 m-4 justify-center">
        <Cart productsCart={productsCart} setProductsCart={setProductsCart} />
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
      <div className="flex gap-4 mb-1">
        <input
          type="text"
          value={busqueda}
          onChange={handleBusquedaChange}
          placeholder="Buscar productos..."
          className="py-2 px-4 rounded-sm border text-white border-gray-500 transition duration-300 ease-in-out bg-[#323232] mb-4"
        />
        <select
          value={orden}
          onChange={handleOrdenChange}
          style={{ height: "42px" }}
          className="py-2 px-4 rounded-sm border text-white border-gray-500 transition duration-300 ease-in-out bg-[#323232]"
        >
          <option className="bg-[#232323] text-gray-400" value="">
            Ordenar por precio
          </option>
          <option className="bg-[#232323] text-gray-400" value="menor">
            Menor a mayor
          </option>
          <option className="bg-[#232323] text-gray-400" value="mayor">
            Mayor a menor
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8  m-8 bg-[#232323] ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="text-gray-400">No hay productos disponibles</p>
        )}
      </div>
    </section>
  );
}

export default Productos;
