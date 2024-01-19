"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionPG = void 0;
const functionConnection_1 = require("./functionConnection");
exports.optionPG = {
    receive(e) { (0, functionConnection_1.camelizeColumns)(e.data); }
};
