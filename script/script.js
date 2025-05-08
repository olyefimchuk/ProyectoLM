// €

// variables para obtener elementos de html a traves del id
let cantidad_carrito = document.getElementById("cantidad-carrito");
let cantidad_carrito_modal = document.getElementById("cantidad-carrito-modal");
let suma_carrito_modal = document.getElementById("suma-carrito-modal");

let cantidad = 0;
let suma = 0;


// Funcion para agregar productos al carrito
function agregarAlCarrito(precio) {
    cantidad++;
    suma += precio;

    cantidad_carrito.innerHTML = cantidad;

    cantidad_carrito_modal.innerHTML = cantidad;
    suma_carrito_modal.innerHTML = suma + "€";
}


// Funcion para vaciar carrito
function vaciarCarrito() {
    cantidad = 0;
    suma = 0;

    cantidad_carrito.innerHTML = 0;

    cantidad_carrito_modal.innerHTML = 0;
    suma_carrito_modal.innerHTML = 0 + "€";
}

