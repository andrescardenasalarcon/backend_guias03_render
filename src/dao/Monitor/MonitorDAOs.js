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
class MonitorDAOs {
    static obtenerMonitor(sqlConsulta, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            connectionBD_1.default.result(sqlConsulta, parametros)
                .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
                .catch((mierror) => {
                console.log('!Error¡', mierror);
                res.status(400).json({ respuesta: 'Algo salió mal en Monitor' });
            });
        });
    }
    static buscarMonitorPorId(sqlBuscar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.one(sqlBuscar, parametros)
                .then((dato) => {
                console.log(dato);
                res.status(200).json(dato);
            })
                .catch((mierror) => {
                console.log(mierror);
                res.status(404).json({ msg: '!Error buscando el Monitor' });
            });
        });
    }
    static crearMonitor(sqlCrear, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.one(sqlCrear, parametros);
            }))
                .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Monitor Creado!!!', nuevoCodigo: respuesta.id_monitor });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas', err });
            });
        });
    }
    static actualizarMonitor(sqlActualizar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                return yield consulta.one(sqlActualizar, parametros);
            }))
                .then((respuesta) => {
                console.log(respuesta);
                res.status(200).json({ respuesta: 'Monitor Actualizado!!!' });
            })
                .catch((err) => {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en las consultas' });
            });
        });
    }
    static eliminarPorId(sqlConfirm, sqlBuscar, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default
                .task((consult) => __awaiter(this, void 0, void 0, function* () {
                // Verificar el número de Monitores vinculados
                const numeroVinculaciones = yield consult.one(sqlConfirm, parametros);
                if (numeroVinculaciones.count === '0') {
                    // No hay Monitores vinculados, proceder con la eliminación
                    const resultadoEliminar = yield consult.result(sqlBuscar, parametros);
                    return { success: true, rowCount: resultadoEliminar.rowCount };
                }
                else {
                    // Hay Monitores vinculados, no se puede eliminar
                    return { success: false, msg: 'No se puede eliminar el Monitor porque está vinculado a una o más Computadoras' };
                }
            }))
                .then((answer) => {
                // Aca va si todo está bien
                if (answer.success) {
                    res.status(200).json({ success: true, msg: 'Monitor eliminado', rowCount: answer.rowCount });
                }
                else {
                    // Aquí puedes personalizar el mensaje o realizar acciones adicionales si hay vinculaciones
                    // console.log('Monitor está vinculado a una o más Computadoras. No se elimina.');
                    res.status(400).json({ success: false, msg: answer.msg });
                }
            })
                .catch((miError) => {
                console.log('Error, consult no se realizó con éxito', miError);
                res.status(400).json({ success: false, msg: 'Error en la consulta' });
            });
        });
    }
}
exports.default = MonitorDAOs;
