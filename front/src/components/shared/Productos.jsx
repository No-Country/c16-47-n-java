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
  const [currentPage, setCurrentPage] = useState(1);
  const [idCart, setIdCart] = useState(1);

  useEffect(() => {
    traerProductos().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      localStorage.setItem("productos", JSON.stringify(products));
    });
  }, []);

  function addToCart(prod, cant) {
    setIdCart(idCart + 1);
    const newProduct = {
      id: prod.id,
      idCart: idCart,
      name: prod.name,
      price: prod.price,
      stock: prod.stock,
      cant: cant,
      imageUrl: prod.imageUrl,
    };
    console.log("////////////////////////////////////")
    console.log("Nuevo Producto para agregar al carrito")
    console.log(newProduct)
    console.log("////////////////////////////////////")
    try {
      setProductsCart([...productsCart, newProduct]);
      localStorage.setItem("productsCart", productsCart);
    } catch (error) {
      console.log("No se puede agregar el producto. Error: " + error);
    }
  }

  useEffect(() => {
    const productosFiltrados = products.filter((product) =>
      product.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    if (categoriaSeleccionada !== "todos") {
      const productosFiltradosCategoria = productosFiltrados.filter(
        (product) => product.category === categoriaSeleccionada
      );
      setFilteredProducts(productosFiltradosCategoria);
    } else {
      setFilteredProducts(productosFiltrados);
    }
  }, [busqueda, products, categoriaSeleccionada]);

  useEffect(() => {
    let productosOrdenados;
    if (orden === "menor") {
      productosOrdenados = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
    } else if (orden === "mayor") {
      productosOrdenados = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
    } else {
      productosOrdenados = filteredProducts;
    }
    setFilteredProducts(productosOrdenados);
  }, [orden, filteredProducts]);

  const handleFiltroCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleOrdenChange = (e) => {
    setOrden(e.target.value);
  };

  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
        <div className="flex flex-wrap justify-center gap-4 mb-1">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
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
      <div className="flex justify-center mt-3">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-2 mb-20 font-bold text-lg ${
                currentPage === page
                  ? "bg-gray-700 rounded-full text-[#a1bb23]"
                  : " text-gray-300"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </section>
  );
}

export default Productos;
