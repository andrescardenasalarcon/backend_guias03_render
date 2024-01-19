"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComputadoraDAOs_1 = __importDefault(require("../../dao/Computadora/ComputadoraDAOs"));
const computadora_querys_sql_1 = require("../../repository/Computadora/computadora_querys_sql");
class ComputadoraController extends ComputadoraDAOs_1.default {
    showComputadoras(req, res) {
        ComputadoraController.obtenerComputadora(computadora_querys_sql_1.SQL_COMPUTADORA.TODO, [], res);
    }
    buscar(req, res) {
        const codigo = req.params.codComputadora;
        const parametro = [codigo];
        ComputadoraController.buscarComputadoraPorId(computadora_querys_sql_1.SQL_COMPUTADORA.BUSCAR, parametro, res);
    }
    crear(req, res) {
        const nombre = req.body.nombre;
        const monitor = req.body.monitor.idMonitor;
        const teclado = req.body.teclado.id;
        const raton = req.body.raton.id;
        const publicoFotoComputadora = req.body.publicoFotoComputadora;
        const base64Computadora = req.body.base64Computadora;
        const precio = req.body.precio;
        const parametro = [nombre, monitor, teclado, raton, publicoFotoComputadora, base64Computadora, precio];
        ComputadoraController.crearComputadora(computadora_querys_sql_1.SQL_COMPUTADORA.CREAR, parametro, res);
    }
    actualizar(req, res) {
        const codigo = req.body.idComputadora;
        const nombre = req.body.nombre;
        const monitor = req.body.monitor.idMonitor;
        const teclado = req.body.teclado.id;
        const raton = req.body.raton.id;
        const publicoFotoComputadora = req.body.publicoFotoComputadora;
        const base64Computadora = req.body.base64Computadora;
        const precio = req.body.precio;
        const parametro = [codigo, nombre, monitor, teclado, raton, publicoFotoComputadora, base64Computadora, precio];
        ComputadoraController.actualizarComputadora(computadora_querys_sql_1.SQL_COMPUTADORA.ACTUALIZAR, parametro, res);
    }
    borrar(req, res) {
        const codigo = req.params.codComputadora;
        const parametro = [codigo];
        ComputadoraController.eliminarPorId(computadora_querys_sql_1.SQL_COMPUTADORA.BORRAR, parametro, res);
    }
}
const computadoraController = new ComputadoraController();
exports.default = computadoraController;
