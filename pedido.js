import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import ElementoPedido from "./elemento_pedido.js";
import Precio from "./precio.js";

export default class Pedido {
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente 
     */
    constructor(fecha, hora, cliente) {
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._elementosPedidos = [];
    }
    getNumeroElementos = _ => this._elementosPedidos.length;

    getProductos = _ => {
        let nProductos = 0;
        this._elementosPedidos.forEach(elemento => {
            nProductos+=elemento.cantidad;
        });
        return nProductos;
    }

    getCostoTotal = _ => {
        let costo = 0;
        this._elementosPedidos.forEach(elemento => {
            costo += elemento._cantidad * elemento._producto._precio._valor;
        });
        return new Precio(costo).getPrecio();
    }

    getResumen = _ =>
        `${this._fecha.getFecha()}  ${this._hora.getFormato12()}\n-${this.getNumeroElementos()} elementos con ${this.getProductos()} productos-\ntotal: ${this.getCostoTotal()}`;
    /**
     * @param {ElementoPedido} elementos
     */
    agregarElemento = elemento => this._elementosPedidos.push(elemento);

    listarElementos = _ => this._elementosPedidos.forEach(elemento => console.log(elemento.getDescripcion(), '\n'));
}
