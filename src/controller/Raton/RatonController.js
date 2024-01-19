"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RatonDAOs_1 = __importDefault(require("../../dao/Raton/RatonDAOs"));
const raton_sql_1 = require("../../repository/Raton/raton_sql");
class RatonController extends RatonDAOs_1.default {
    mostrar(req, res) {
        RatonController.obtenerRatones(raton_sql_1.SQL_RATON.TODO, [], res);
    }
    buscar(req, res) {
        const codigo = req.params.codRaton;
        const parametro = [codigo];
        RatonController.buscarRatonPorId(raton_sql_1.SQL_RATON.BUSCAR, parametro, res);
    }
    crear(req, res) {
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [dispositivoEntrada, marca];
        RatonController.crearRaton(raton_sql_1.SQL_RATON.CREAR, parametro, res);
    }
    actualizar(req, res) {
        const codigo = req.body.id;
        const dispositivoEntrada = req.body.dispositivoEntrada;
        const marca = req.body.marca;
        const parametro = [codigo, dispositivoEntrada, marca];
        RatonController.actualizarRaton(raton_sql_1.SQL_RATON.ACTUALIZAR, parametro, res);
    }
    borrar(req, res) {
        const codigo = req.params.codRaton;
        const parametro = [codigo];
        RatonController.eliminarPorId(raton_sql_1.SQL_RATON.ASOCIADO, raton_sql_1.SQL_RATON.BORRAR, parametro, res);
    }
}
const ratonController = new RatonController;
exports.default = ratonController;
