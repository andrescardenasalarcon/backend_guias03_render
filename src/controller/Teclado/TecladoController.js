"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TecladoDAOs_1 = __importDefault(require("../../dao/Teclado/TecladoDAOs"));
const teclado_querys_sql_1 = require("../../repository/Teclado/teclado_querys_sql");
class TecladoController extends TecladoDAOs_1.default {
    mostrar(req, res) {
        TecladoController.obtenerTeclados(teclado_querys_sql_1.SQL_TECLADO.TODO, [], res);
    }
    buscar(req, res) {
        const codigo = req.params.codTeclado;
        const parametro = [codigo];
        TecladoController.buscarTecladoPorId(teclado_querys_sql_1.SQL_TECLADO.BUSCAR, parametro, res);
    }
    crear(req, res) {
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [dispositivoEntrada, marca];
        TecladoController.crearTeclado(teclado_querys_sql_1.SQL_TECLADO.CREAR, parametro, res);
    }
    actualizar(req, res) {
        const codigo = req.body.id;
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [codigo, dispositivoEntrada, marca];
        TecladoController.actualizarTeclado(teclado_querys_sql_1.SQL_TECLADO.ACTUALIZAR, parametro, res);
    }
    borrar(req, res) {
        const codigo = req.params.codTeclado;
        const parametro = [codigo];
        TecladoController.eliminarPorId(teclado_querys_sql_1.SQL_TECLADO.ASOCIADO, teclado_querys_sql_1.SQL_TECLADO.BORRAR, parametro, res);
    }
}
const tecladoController = new TecladoController;
exports.default = tecladoController;
