"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const optionsConnection_1 = require("./optionsConnection");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: 'variables.env' });
const pgp = (0, pg_promise_1.default)(optionsConnection_1.optionPG);
const dbConfig = {
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: Number(process.env.port),
    ssl: true
};
const pool = pgp(dbConfig);
pool.connect()
    .then((conn) => {
    console.log("Connection to: ", dbConfig.database);
    conn.done();
})
    .catch((err) => {
    throw new Error(err);
});
exports.default = pool;
