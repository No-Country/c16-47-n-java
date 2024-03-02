export async function traerProductos() {
  try {
    const res = await fetch("http://localhost:8080/product/findall");
    if (!res.ok) {
      throw new Error("Error al traer productos");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
    throw error;
  }
}

export async function login(request) {
  try {
    const res = await fetch("http://localhost:8080/auth/login", {
      body: JSON.stringify(request),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Error al iniciar sesión");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("No se puede logear. Error: " + error);
  }
  return null;
}

export async function register(request) {
  try {
    const res = await fetch("http://localhost:8080/auth/register", {
      body: JSON.stringify(request),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Error al registrar usuario");
    }
  } catch (error) {
    console.log("No se puede registrar. Error: " + error);
    throw error;
  }
}

export async function traerUsuario(token) {
  try {
    const res = await fetch("http://localhost:8080/user/user", {
      headers: {
        Authorization: token, // Aquí agregamos el token al encabezado de autorización
      },
    });
    if (!res.ok) {
      throw new Error("Error al obtener el usuario");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
    throw error;
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
