export async function traerProductos() {
  try {
    const res = await fetch("http://localhost:8080/product/findall");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
  }
}

export async function login(request) {
  console.log("Entrando al servicio");
  try {
    const res = await fetch("http://localhost:8080/auth/login", {
      body: JSON.stringify(request),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    console.log(`res desde el servicio: ${res}`)
    const data = await res.json();
    console.log(`data desde el servicio: ${data}`)
    return data;
  } catch (error) {
    console.log("No se puede logear. Error: " + error);
  }
  return null;
}

export async function register(request) {
  try {
    await fetch("http://localhost:8080/auth/register", {
      body: JSON.stringify(request),
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
  } catch (error) {
    console.log("No se puede logear. Error: " + error);
  }
}

export async function traerUsuario() {
  try {
    const res = await fetch("http://localhost:8080/user/user");
    const data = await res.json();
    console.log("Usuario desde el Servicio: " + data);
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
  }
}

export async function guardarCambios(request) {
  try {
    await fetch("http://localhost:8080/user/changes", {
      body: JSON.stringify(request),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
  } catch (error) {
    console.log("No se puede guardar los cambios. Error: " + error);
  }
}

export async function traerCarrito() {
  try {
    const res = await fetch("/src/json/carrito.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
  }
}

export async function traerCategoria() {
  try {
    const res = await fetch("/src/json/categoria.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
  }
}

export async function traerImagen() {
  try {
    const res = await fetch("/src/json/imagen.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
  }
}

export async function traerOrden() {
  try {
    const res = await fetch("/src/json/orden.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
  }
}
