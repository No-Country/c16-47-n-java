export async function traerProductos() {
    try {
        const res = await fetch('/src/json/producto.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function traerCarrito() {
    try {
        const res = await fetch('/src/json/carrito.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function traerCategoria() {
    try {
        const res = await fetch('/src/json/categoria.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function traerImagen() {
    try {
        const res = await fetch('/src/json/imagen.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function traerOrden() {
    try {
        const res = await fetch('/src/json/orden.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function traerUsuario() {
    try {
        const res = await fetch('/src/json/usuario.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}