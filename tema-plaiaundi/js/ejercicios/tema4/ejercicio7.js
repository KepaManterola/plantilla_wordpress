import { Producto } from "./modelos/producto.js";

import {
    productoConRecargo
} from "./modelos/productoConRecargo.js";

const teclado = new Producto(1, "Teclado", 35, 4);
const cable = new productoConRecargo(2, "Cable", 10, 2);

console.log(teclado.calcularValorStock());
console.log(cable.calcularValorStock());

const productos = [teclado, cable];

const total = productos.reduce(
    (suma, producto) => suma + producto.calcularValorStock(),
    0
);

console.log(total);