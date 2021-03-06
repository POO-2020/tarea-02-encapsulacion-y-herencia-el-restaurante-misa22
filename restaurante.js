export default class Restaurante {
    /**
     * @param {string} nombre
     * @param {number} telefono
     * @param {direccion} direccion
     * 
     */
    constructor(nombre, telefono, direccion) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = [];
        this._pedidos = [];
    }
    registrarProducto = producto => this._productos.push(producto);
    listarProductos = _ => this._productos.forEach(producto => console.log('Producto: ',producto.getDescripcion()));

    registrarPedido = pedido => this._pedidos.push(pedido);

    listarPedidos = _ => this._pedidos.forEach(pedido => console.log('Pedido: ',pedido.getResumen()));
}