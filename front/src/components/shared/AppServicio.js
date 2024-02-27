export async function traerProductos() {
    try {
        const res = await fetch('http://localhost:8080/product/findall')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("La respuesta del servicio no es válida. " + error)
    }
}

export async function traerCarrito() {
    try {
        const res = await fetch('/src/json/carrito.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("La respuesta del servicio no es válida. " + error)
    }
}

export async function traerCategoria() {
    try {
        const res = await fetch('/src/json/categoria.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("La respuesta del servicio no es válida. " + error)
    }
}

export async function traerImagen() {
    try {
        const res = await fetch('/src/json/imagen.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("La respuesta del servicio no es válida. " + error)
    }
}

export async function traerOrden() {
    try {
        const res = await fetch('/src/json/orden.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("La respuesta del servicio no es válida. " + error)
    }
}

export async function traerUsuario() {
    try {
        const res = await fetch('/src/json/usuario.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("La respuesta del servicio no es válida. " + error)
    }
}