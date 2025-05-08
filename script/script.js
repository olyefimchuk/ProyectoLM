// €

let cantidad_carrito = document.getElementById("cantidad-carrito");
let suma_carrito = document.getElementById("suma-carrito");


let cantidad = 0;
    let suma = 0;
function agregarAlCarrito(precio) {
    cantidad++;
    suma += precio;

    cantidad_carrito.innerHTML = cantidad;
    suma_carrito.innerHTML = suma + "€";
}