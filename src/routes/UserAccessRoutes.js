"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserLoginController_1 = __importDefault(require("../controller/User/UserLoginController"));
const UserSignInController_1 = __importDefault(require("../controller/User/UserSignInController"));
class UserAccessRoutes {
    constructor() {
        this.routesAccessApi = (0, express_1.Router)();
        this.configuration();
    }
    configuration() {
        this.routesAccessApi.post("/login", UserLoginController_1.default.findTheAccessUser);
        this.routesAccessApi.post("/signin", UserSignInController_1.default.createUser);
    }
}
const userAccessRoutes = new UserAccessRoutes();
exports.default = userAccessRoutes.routesAccessApi;
