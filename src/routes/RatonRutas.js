"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RatonController_1 = __importDefault(require("../controller/Raton/RatonController"));
const Safety_1 = __importDefault(require("../middleware/Safety"));
class RatonRutas {
    constructor() {
        this.rutasRatonApi = (0, express_1.Router)();
        this.configurations();
    }
    configurations() {
        this.rutasRatonApi.get('/', RatonController_1.default.mostrar);
        this.rutasRatonApi.get('/:codRaton', RatonController_1.default.buscar);
        this.rutasRatonApi.post('/crearRaton', Safety_1.default.verificarToken, RatonController_1.default.crear);
        this.rutasRatonApi.put('/editarRaton', Safety_1.default.verificarToken, RatonController_1.default.actualizar);
        this.rutasRatonApi.delete('/:codRaton', Safety_1.default.verificarToken, RatonController_1.default.borrar);
    }
}
const ratonRutas = new RatonRutas();
exports.default = ratonRutas.rutasRatonApi;
