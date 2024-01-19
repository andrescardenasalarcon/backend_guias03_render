"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TecladoController_1 = __importDefault(require("../controller/Teclado/TecladoController"));
const Safety_1 = __importDefault(require("../middleware/Safety"));
class TecladoRutas {
    constructor() {
        this.rutasTecladoApi = (0, express_1.Router)();
        this.configurations();
    }
    configurations() {
        this.rutasTecladoApi.get('/', TecladoController_1.default.mostrar);
        this.rutasTecladoApi.get('/:codTeclado', TecladoController_1.default.buscar);
        this.rutasTecladoApi.post('/crearTeclado', Safety_1.default.verificarToken, TecladoController_1.default.crear);
        this.rutasTecladoApi.put('/editarTeclado', Safety_1.default.verificarToken, TecladoController_1.default.actualizar);
        this.rutasTecladoApi.delete('/:codTeclado', Safety_1.default.verificarToken, TecladoController_1.default.borrar);
    }
}
const tecladoRutas = new TecladoRutas();
exports.default = tecladoRutas.rutasTecladoApi;
