"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MonitorController_1 = __importDefault(require("../controller/Monitor/MonitorController"));
const Safety_1 = __importDefault(require("../middleware/Safety"));
class MonitorRutas {
    constructor() {
        this.routeMonitorApi = (0, express_1.Router)();
        this.routeMonitorApi = (0, express_1.Router)();
        this.configuration();
    }
    configuration() {
        this.routeMonitorApi.get('/', MonitorController_1.default.showMonitores);
        this.routeMonitorApi.get('/:codMonitor', MonitorController_1.default.buscar);
        this.routeMonitorApi.post('/crearMonitor', Safety_1.default.verificarToken, MonitorController_1.default.crear);
        this.routeMonitorApi.put('/editarMonitor', Safety_1.default.verificarToken, MonitorController_1.default.actualizar);
        this.routeMonitorApi.delete('/:codMonitor', Safety_1.default.verificarToken, MonitorController_1.default.borrar);
    }
}
const monitorRutas = new MonitorRutas();
exports.default = monitorRutas.routeMonitorApi;
