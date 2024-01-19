"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompradorDAOs_1 = __importDefault(require("../../dao/Comprador/CompradorDAOs"));
const comprador_querys_sql_1 = require("../../repository/Comprador/comprador_querys_sql");
class CompradorController extends CompradorDAOs_1.default {
    showComprador(req, res) {
        CompradorController.obtenerComprador(comprador_querys_sql_1.SQL_COMPRADOR.TODO, [], res);
    }
    buscar(req, res) {
        const codigo = req.params.codComprador;
        const parametro = [codigo];
        CompradorController.buscarCompradorPorId(comprador_querys_sql_1.SQL_COMPRADOR.BUSCAR, parametro, res);
    }
    crear(req, res) {
        const primerNombre = req.body.primerNombre;
        const segundoNombre = req.body.segundoNombre;
        const primerApellido = req.body.primerApellido;
        const segundoApellido = req.body.segundoApellido;
        const documento = req.body.documento;
        const nombreFoto = req.body.nombreFoto;
        const base64Comprador = req.body.base64Comprador;
        const parametro = [primerNombre, segundoNombre, primerApellido, segundoApellido, documento, nombreFoto, base64Comprador];
        CompradorController.crearComprador(comprador_querys_sql_1.SQL_COMPRADOR.CREAR, parametro, res);
    }
    actualizar(req, res) {
        const codigo = req.body.idComprador;
        const primerNombre = req.body.primerNombre;
        const segundoNombre = req.body.segundoNombre;
        const primerApellido = req.body.primerApellido;
        const segundoApellido = req.body.segundoApellido;
        const documento = req.body.documento;
        const nombreFoto = req.body.nombreFoto;
        const base64Comprador = req.body.base64Comprador;
        const parametro = [codigo, primerNombre, segundoNombre, primerApellido, segundoApellido, documento, nombreFoto, base64Comprador];
        CompradorController.actualizarComprador(comprador_querys_sql_1.SQL_COMPRADOR.ACTUALIZAR, parametro, res);
    }
    borrar(req, res) {
        const codigo = req.params.codComprador;
        const parametro = [codigo];
        CompradorController.eliminarPorId(comprador_querys_sql_1.SQL_COMPRADOR.BORRAR, parametro, res);
    }
}
const compradorController = new CompradorController();
exports.default = compradorController;
