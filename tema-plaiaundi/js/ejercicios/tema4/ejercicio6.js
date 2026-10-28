class ProductoConRecargo extends Producto {
    calcularValorStock() {
        return super.calcularValorStock() * 1.10;
    }
}

const cable = new ProductoConRecargo(2, "Cable", 10, 2);

console.log(cable.calcularValorStock());

const productos = [
    new Producto(1, "Teclado", 35, 4),
    new ProductoConRecargo(2, "Cable", 10, 2)
];

const total = productos.reduce(
    (suma, producto) => suma + producto.calcularValorStock(),
    0
);

console.log("Valor total:", total);