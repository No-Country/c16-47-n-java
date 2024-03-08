export async function traerProductos() {
  try {
    // "https://c16-47-n-java-proyect-test.koyeb.app/product/findall"
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
    // "https://c16-47-n-java-proyect-test.koyeb.app/auth/login"
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
    // "https://c16-47-n-java-proyect-test.koyeb.app/auth/register"
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
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("No se puede registrar. Error: " + error);
    throw error;
  }
}

export async function traerUsuario(token) {
  try {
    // "https://c16-47-n-java-proyect-test.koyeb.app/user/user"
    const res = await fetch("http://localhost:8080/user/user", {
      headers: {
        Authorization: token,
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

export async function guardarCambios(request, token) {
  try {
    // "https://c16-47-n-java-proyect-test.koyeb.app/user/profileUpdate"
    const res = await fetch("http://localhost:8080/user/profileUpdate", {
      body: JSON.stringify(request),
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
      method: "PUT",
    });
    if (!res.ok) {
      throw new Error("Error al actualizar el usuario");
    }
  } catch (error) {
    console.log("No se puede guardar los cambios. Error: " + error);
  }
}

export async function guardarImagen(id, formData, token) {
  try {
    // `https://c16-47-n-java-proyect-test.koyeb.app/user/updateImage/${id}`
    const res = await fetch(`http://localhost:8080/user/updateImage/${id}`, {
      body: formData,
      headers: {
        Authorization: token,
      },
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Error al actualizar la imagen");
    }
  } catch (error) {
    console.log("La respuesta del servicio no es válida. " + error);
  }
}

export async function generarOrden(request, token) {
  try {
    // "https://c16-47-n-java-proyect-test.koyeb.app/order/save"
    const res = await fetch("http://localhost:8080/order/save", {
      body: JSON.stringify(request),
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
      method: "POST",
    });
    console.log("---------------------------------------------------");
    console.log("Request desde AppService.js");
    console.log(request);
    console.log("---------------------------------------------------");
    if (!res.ok) {
      throw new Error("No se pudo realizar la consulta");
    }
  } catch (error) {
    console.log("No se pudo generar la orden. " + error);
  }
}

export async function traerOrdenes(id, token) {
  try {
    const res = await fetch(`http://localhost:8080/order/findbyid/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    if (!res.ok) {
      throw new Error("No se pudo realizar la petición a órdenes");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
