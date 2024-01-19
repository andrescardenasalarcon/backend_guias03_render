"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrdenController_1 = __importDefault(require("../controller/Orden/OrdenController"));
class OrdenRutas {
    constructor() {
        this.routeOrdenApi = (0, express_1.Router)();
        this.routeOrdenApi = (0, express_1.Router)();
        this.configuration();
    }
    configuration() {
        this.routeOrdenApi.get('/', OrdenController_1.default.showOrdenes);
        this.routeOrdenApi.get('/:codOrden', OrdenController_1.default.buscar);
        this.routeOrdenApi.post('/crearOrden', OrdenController_1.default.crear);
        this.routeOrdenApi.put('/editarOrden', OrdenController_1.default.actualizar);
        this.routeOrdenApi.delete('/:codOrden', OrdenController_1.default.borrar);
    }
}
const ordenRutas = new OrdenRutas();
exports.default = ordenRutas.routeOrdenApi;
