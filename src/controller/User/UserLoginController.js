"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserLogin_1 = __importDefault(require("../../dao/User/UserLogin"));
const user_search_one_sql_1 = require("../../repository/User/user_search_one_sql");
const js_md5_1 = require("js-md5");
class UserLoginController extends UserLogin_1.default {
    findTheAccessUser(req, res) {
        const emailUser = req.body.emailUser;
        const password = req.body.password;
        const passwordEncypted = (0, js_md5_1.md5)(password);
        const parametros = [emailUser, passwordEncypted];
        UserLoginController.findIdUserAccess(user_search_one_sql_1.SQL_USER_SEARCH_ONE.LOGIN, parametros, res);
    }
}
const userLoginController = new UserLoginController();
exports.default = userLoginController;
