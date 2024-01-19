"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionBD_1 = __importDefault(require("../../configuration/connection/connectionBD"));
class CompradorDAOs {
    static obtenerComprador(sqlConsulta, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            connectionBD_1.default.result(sqlConsulta, parametros)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Comprador' });
            });
        });
    }
    static buscarCompradorPorId(sqlBuscar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.one(sqlBuscar, parametros)
                .then((dato) => {
                console.log(dato);
                res.status(200).json(dato);
            })
                .catch((mierror) => {
                console.log(mierror);
                res.status(404).json({ msg: '!Error buscando el Comprador' });
            });
        });
    }
    static crearComprador(sqlCrear, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.one(sqlCrear, parametros);
            }))
                .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Comprador Creado!!!', nuevoCodigo: respuesta.id });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas', err });
            });
        });
    }
    static actualizarComprador(sqlActualizar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.one(sqlActualizar, parametros);
            }))
                .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Comprador Actualizado!!!' });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas' });
            });
        });
    }
    static eliminarPorId(sqlBuscar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.result(sqlBuscar, parametros)
                .then((dato) => {
                console.log(dato.rowCount);
                res.status(200).json({ respuesta: dato.rowCount });
            })
                .catch((mierror) => {
                console.log(mierror);
                return res.status(400).json({ msg: 'Error borrando el Comprador' });
            });
        });
    }
}
exports.default = CompradorDAOs;
