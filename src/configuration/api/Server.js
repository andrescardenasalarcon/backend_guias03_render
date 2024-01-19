"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const MonitorRutas_1 = __importDefault(require("../../routes/MonitorRutas"));
const TecladoRutas_1 = __importDefault(require("../../routes/TecladoRutas"));
const RatonRutas_1 = __importDefault(require("../../routes/RatonRutas"));
const ComputadorRutas_1 = __importDefault(require("../../routes/ComputadorRutas"));
const OrdenRutas_1 = __importDefault(require("../../routes/OrdenRutas"));
const CompradorRutas_1 = __importDefault(require("../../routes/CompradorRutas"));
const UserAccessRoutes_1 = __importDefault(require("../../routes/UserAccessRoutes"));
const Safety_1 = __importDefault(require("../../middleware/Safety"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startConfigs();
        this.activateRoutes();
    }
    startConfigs() {
        this.app.set('PORT', 8080);
        this.app.use((0, cors_1.default)()); //Limita quien entra
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true })); //Para peticiones en rutas de todo tipo
    }
    activateRoutes() {
        this.app.use('/api/public', UserAccessRoutes_1.default);
        this.app.use('/api/monitor', MonitorRutas_1.default);
        this.app.use('/api/teclado', TecladoRutas_1.default);
        this.app.use('/api/raton', RatonRutas_1.default);
        this.app.use('/api/computador', ComputadorRutas_1.default);
        this.app.use('/api/comprador', CompradorRutas_1.default);
        this.app.use('/api/orden', Safety_1.default.verificarToken, OrdenRutas_1.default);
    }
    start() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Started!!!', this.app.get('PORT'));
        });
    }
}
;
exports.default = Server;
