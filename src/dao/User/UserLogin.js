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
const UserAccessAnswer_1 = __importDefault(require("../UserAccess/UserAccessAnswer"));
class UserLogin {
    static findIdUserAccess(sqlSearch, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionBD_1.default.oneOrNone(sqlSearch, parameters)
                .then((result) => {
                return UserAccessAnswer_1.default.process(result, res);
            })
                .catch((error) => {
                console.log(error);
                return res.status(400).json({ error: 'Error busando el acceso' });
            });
        });
    }
}
exports.default = UserLogin;
