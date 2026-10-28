import { producto } from "./producto.js";

export class productoConRecargo extends producto {
    calcularValorStock() {
        return super.calcularValorStock() * 1.10;
    }
}