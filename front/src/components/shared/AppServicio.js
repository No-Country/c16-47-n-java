
export async function traerProductos() {
  try {
    const res = await fetch("https://c16-47-n-java-proyect-test.koyeb.app/product/findall");
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
    const res = await fetch("https://c16-47-n-java-proyect-test.koyeb.app/auth/login", {
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
    const res = await fetch("https://c16-47-n-java-proyect-test.koyeb.app/auth/register", {
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
    const res = await fetch("https://c16-47-n-java-proyect-test.koyeb.app/user/user", {
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
    const res = await fetch("https://c16-47-n-java-proyect-test.koyeb.app/user/profileUpdate", {
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
    const res = await fetch(`https://c16-47-n-java-proyect-test.koyeb.app/user/updateImage/${id}`, {
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
    const res = await fetch(`https://c16-47-n-java-proyect-test.koyeb.app/order/save/${request.id}`, {
      body: JSON.stringify(request),
      headers: {
        Authorization: token,
      },
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Error al realizar consulta");
    }
  } catch (error) {
    console.log("No se pudo generar la orden. Error: " + error);
  }
}
