"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MonitorDAOs_1 = __importDefault(require("../../dao/Monitor/MonitorDAOs"));
const monitor_list_sql_1 = require("../../repository/Monitor/monitor_list_sql");
class MonitorController extends MonitorDAOs_1.default {
    showMonitores(req, res) {
        MonitorController.obtenerMonitor(monitor_list_sql_1.SQL_MONITOR.ALL, [], res);
    }
    buscar(req, res) {
        const codigo = req.params.codMonitor;
        const parametro = [codigo];
        MonitorController.buscarMonitorPorId(monitor_list_sql_1.SQL_MONITOR.BUSCAR, parametro, res);
    }
    crear(req, res) {
        const marca = req.body.marca;
        const tamanno = req.body.tamanno;
        const fotoPublicaMonitor = req.body.fotoPublicaMonitor;
        const base64Monitor = req.body.base64Monitor;
        const parametro = [marca, tamanno, fotoPublicaMonitor, base64Monitor];
        MonitorController.crearMonitor(monitor_list_sql_1.SQL_MONITOR.CREAR, parametro, res);
    }
    actualizar(req, res) {
        const codigo = req.body.idMonitor;
        const marca = req.body.marca;
        const tamanno = req.body.tamanno;
        const fotoPublicaMonitor = req.body.fotoPublicaMonitor;
        const base64Monitor = req.body.base64Monitor;
        const parametro = [codigo, marca, tamanno, fotoPublicaMonitor, base64Monitor];
        MonitorController.actualizarMonitor(monitor_list_sql_1.SQL_MONITOR.ACTUALIZAR, parametro, res);
    }
    borrar(req, res) {
        const codigo = req.params.codMonitor;
        const parametro = [codigo];
        MonitorController.eliminarPorId(monitor_list_sql_1.SQL_MONITOR.ASOCIADO, monitor_list_sql_1.SQL_MONITOR.BORRAR, parametro, res);
    }
}
const monitorController = new MonitorController;
exports.default = monitorController;
