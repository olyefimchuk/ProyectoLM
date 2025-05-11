
// variables para obtener elementos de html a traves del id
let cantidad_carrito = document.getElementById("cantidad-carrito"); // para obtener cantidad de los productos en el icono del carrito
let cantidad_carrito_modal = document.getElementById("cantidad-carrito-modal"); // para obtener cantidad de los productos de la ventana modal del carrito
let suma_carrito_modal = document.getElementById("suma-carrito-modal"); // para obtener la suma total de los productos de la ventana modal del carrito

// variables para contar la cantidad y suma de los productos
let cantidad = 0;
let suma = 0;


// Funcion para agregar productos al carrito
function agregarAlCarrito(precio) {
    // Al hacer click en el boton, función hace lo siguiente:
    cantidad++; // incrementamos cantidad
    suma += precio; // y sumamos el precio

    // Con innerHTML cambiamos todos los valores a los nuevos
    cantidad_carrito.innerHTML = cantidad; // cantidad en el icono del carrito
    cantidad_carrito_modal.innerHTML = cantidad; // cantidad dentro del ventana modal
    suma_carrito_modal.innerHTML = suma + "€"; // suma total dentro del ventana modal
}


// Funcion para vaciar carrito
function vaciarCarrito() {
    // asignamos 0 a la suma y cantidad
    cantidad = 0;
    suma = 0;

    // con innerHTML cambiamos todos los valores a cero
    cantidad_carrito.innerHTML = 0; 
    cantidad_carrito_modal.innerHTML = 0;
    suma_carrito_modal.innerHTML = 0 + "€";
}

