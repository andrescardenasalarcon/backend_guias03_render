"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ComputadoraController_1 = __importDefault(require("../controller/Computadora/ComputadoraController"));
const Safety_1 = __importDefault(require("../middleware/Safety"));
class ComputadorRutas {
    constructor() {
        this.routeComputadorApi = (0, express_1.Router)();
        this.routeComputadorApi = (0, express_1.Router)();
        this.configutation();
    }
    configutation() {
        this.routeComputadorApi.get('/', ComputadoraController_1.default.showComputadoras);
        this.routeComputadorApi.get('/:codComputadora', ComputadoraController_1.default.buscar);
        this.routeComputadorApi.post('/crearPc', Safety_1.default.verificarToken, ComputadoraController_1.default.crear);
        this.routeComputadorApi.put('/editarPC', Safety_1.default.verificarToken, ComputadoraController_1.default.actualizar);
        this.routeComputadorApi.delete('/:codComputadora', Safety_1.default.verificarToken, ComputadoraController_1.default.borrar);
    }
}
const computadorRutas = new ComputadorRutas();
exports.default = computadorRutas.routeComputadorApi;
