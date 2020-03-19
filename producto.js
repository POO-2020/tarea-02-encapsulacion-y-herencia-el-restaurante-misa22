import Precio from "./precio.js";
export default class Producto {
    /**
     * @param {string} nombre 
     * @param {Precio} precio
     */
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    getDescripcion() {
        return `${this._nombre},${this._precio.getPrecio()}`;
    }
}
//var Producto1 = new Producto("pizza mexicana grande",new Precio(200));
//console.log(Producto1.getDescripcion());