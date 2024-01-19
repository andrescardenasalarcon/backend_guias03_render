"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserSignIn_1 = __importDefault(require("../../dao/User/UserSignIn"));
const user_create_sql_1 = require("../../repository/User/user_create_sql");
const js_md5_1 = require("js-md5");
class UserSignInController extends UserSignIn_1.default {
    createUser(req, res) {
        const fullName = req.body.fullName;
        const emailUser = req.body.emailUser;
        const stateUser = req.body.stateUser;
        const idProfile = req.body.idProfile;
        const passwordUser = req.body.password;
        const passwordEncypted = (0, js_md5_1.md5)(passwordUser);
        const parametres = [fullName, emailUser, stateUser, idProfile, passwordEncypted];
        UserSignInController.createUser(user_create_sql_1.SQL_USER_CREATE.CONFIRM, user_create_sql_1.SQL_USER_CREATE.CREATE, parametres, res);
    }
}
const userSignInController = new UserSignInController();
exports.default = userSignInController;
