import { useEffect, useState } from "react";
import { traerProductos } from "./AppServicio";
import Card from "./Card";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProductos()
      .then((data) => {
        if (data && Array.isArray(data)) {
          setProductos(data);
        } else {
          console.error("La respuesta del servicio no es válida.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))
      ) : (
        <p className="text-gray-400">No hay productos disponibles</p>
      )}
    </div>
  );
}

export default Productos;
