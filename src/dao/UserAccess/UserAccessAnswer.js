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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserAccessAnswer {
    static process(register, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (register != null) {
                console.log("register: ", register);
                //Creamos el token
                const user = register.fullName;
                const role = register.idProfile;
                const tokFull = { codigo: register.idUser, correo: register.emailUser, role: register.idProfile };
                const tokenBackend = jsonwebtoken_1.default.sign({ codigo: register.idUser, correo: register.emailUser, role: register.idProfile }, 'abcdfghijklmnopqrstuvxyz1234567890', { expiresIn: '4h' });
                return res.status(200).json({ tokenBackend: tokenBackend, tokenName: user, tokenRole: role, tokenFull: tokFull });
            }
            else {
                return res.status(401).json({ miError: 'Usuario incorrecto' });
            }
        });
    }
}
exports.default = UserAccessAnswer;
