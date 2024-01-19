"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompradorController_1 = __importDefault(require("../controller/Comprador/CompradorController"));
const Safety_1 = __importDefault(require("../middleware/Safety"));
class CompradorRutas {
    constructor() {
        this.routeCompradorpi = (0, express_1.Router)();
        this.routeCompradorpi = (0, express_1.Router)();
        this.configutation();
    }
    configutation() {
        this.routeCompradorpi.get('/', CompradorController_1.default.showComprador);
        this.routeCompradorpi.get('/:codComprador', CompradorController_1.default.buscar);
        this.routeCompradorpi.post('/crearComprador', Safety_1.default.verificarToken, CompradorController_1.default.crear);
        this.routeCompradorpi.put('/editarComprador', Safety_1.default.verificarToken, CompradorController_1.default.actualizar);
        this.routeCompradorpi.delete('/:codComprador', Safety_1.default.verificarToken, CompradorController_1.default.borrar);
    }
}
const compradorRutas = new CompradorRutas();
exports.default = compradorRutas.routeCompradorpi;
