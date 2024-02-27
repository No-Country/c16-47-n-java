import { useEffect, useState } from "react";
import { traerProductos } from "./AppServicio";
import ProductCard from "./ProductCard";

function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    traerProductos().then((data) => setProducts(data));
  }, []);

  return (
    <section id="productos" className="flex justify-center bg-cover">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-8">
        {products.length > 0 &&  products? (
          products.map((product) => (
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
