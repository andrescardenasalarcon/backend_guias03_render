"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrdenDAOs_1 = __importDefault(require("../../dao/Orden/OrdenDAOs"));
const orden_querys_sql_1 = require("../../repository/Orden/orden_querys_sql");
class OrdenController extends OrdenDAOs_1.default {
    showOrdenes(req, res) {
        OrdenController.obtenerOrden(orden_querys_sql_1.SQL_ORDEN.TODO, [], res);
    }
    buscar(req, res) {
        const codigo = req.params.codOrden;
        const parametro = [codigo];
        OrdenController.buscarOrdenPorId(orden_querys_sql_1.SQL_ORDEN.BUSCAR, parametro, res);
    }
    crear(req, res) {
        const cantidad = req.body.cantidad;
        const computadoras = req.body.computadoras.idComputadora;
        const comprador = req.body.comprador.idComprador;
        const parametro = [cantidad, computadoras, comprador];
        console.log(parametro);
        OrdenController.crearOrden(orden_querys_sql_1.SQL_ORDEN.CREAR, parametro, res);
    }
    actualizar(req, res) {
        const codigo = req.body.idOrden;
        const cantidad = req.body.cantidad;
        const computadoras = req.body.computadoras.idComputadora;
        const comprador = req.body.comprador.idComprador;
        const parametro = [codigo, cantidad, computadoras, comprador];
        OrdenController.actualizarOrden(orden_querys_sql_1.SQL_ORDEN.ACTUALIZAR, parametro, res);
    }
    borrar(req, res) {
        const codigo = req.params.codOrden;
        const parametro = [codigo];
        OrdenController.buscarOrdenPorId(orden_querys_sql_1.SQL_ORDEN.BUSCAR, parametro, res);
    }
}
const ordenController = new OrdenController();
exports.default = ordenController;
