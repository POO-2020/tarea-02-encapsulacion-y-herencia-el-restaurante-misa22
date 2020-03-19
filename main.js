import Tiempo from './tiempo.js'
import Precio from './precio.js';
import Fecha from './fecha.js';
import Direccion from './direccion.js';
import Cliente from './cliente.js';
import Producto from './producto.js';
import ElementoPedido from './elemento_pedido.js';
import Pedido from './pedido.js';
import Restaurante from './restaurante.js';

const tiempo = new Tiempo(9, 35, 'pm');

const precio = new Precio(200);

const Fecha1 = new Fecha(24, 9, 2000);
const fechaEntrega = new Fecha(4, 1, 2020);

const Direccion1 = new Direccion('Morelos', '23A', undefined, 'Concepcion barbosa',
    28510, 'Queseria', 'Cuahutemoc');

const Cliente1 = new Cliente('Misael Solano', Direccion1, 3121838023);

const producto1 = new Producto('Pizza grande mexicana', precio);
const producto2 = new Producto('Hamburgesa', new Precio(40));

const elementoPedido1 = new ElementoPedido(producto1, 1);
const elementoPedido2 = new ElementoPedido(producto2, 1);

const pedido1 = new Pedido(fechaEntrega, tiempo, Cliente1);

const restaurante1 = new Restaurante('Antojos doña toña', 3152641, Direccion);

const probarTiempo = _ =>
    console.log(
        tiempo.getFormato12(),
        tiempo.getFormato24()
    );

probarTiempo();

const probarFecha = _ =>
    console.log(
        Fecha1.getAnnios(),
        Fecha1.getDiaFecha(),
        Fecha1.getDias(),
        Fecha1.getFecha(),
        Fecha1.getMeses(),
        Fecha1.getSemanas()
    );

probarFecha();

const probarDireccion = _ =>
    console.log(
        Direccion1.getFormatoCorto(),
        '\n',
        Direccion1. getFormatoExtendido() 
    );
probarDireccion();

const probarCliente = _ => console.log(Cliente1.getPerfil());
probarCliente();

const probarPrecio = _ => console.log(precio.getPrecio());
probarPrecio();

const probarProducto = _ => console.log(producto1.getDescripcion());
probarProducto();

const probarElementoPedido = _ => console.log(elementoPedido1.getDescripcion());
probarElementoPedido();

const probarPedido = _ => {
    pedido1.agregarElemento(elementoPedido1);
    pedido1.agregarElemento(elementoPedido2);
    console.log(pedido1.getResumen());
    pedido1.listarElementos();
}
probarPedido();

const probarRestaurante = _ => {
    restaurante1.registrarProducto(producto1);
    restaurante1.registrarProducto(producto2);
    restaurante1.registrarPedido(pedido1);

    restaurante1.listarProductos();
    restaurante1.listarPedidos();
}
probarRestaurante();