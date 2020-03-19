export default class Restaurante {
    /**
     * @param {string} nombre
     * @param {number} telefono
     * @param {direccion} direccion
     * 
     */
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.productos = [];
        this.pedidos = [];
    }
    registrarProducto = producto => this.productos.push(producto);
    listarProductos = _ => this.productos.forEach(producto => console.log('Producto: ',producto.getDescripcion()));

    registrarPedido = pedido => this.pedidos.push(pedido);

    listarPedidos = _ => this.pedidos.forEach(pedido => console.log('Pedido: ',pedido.getResumen()));
}