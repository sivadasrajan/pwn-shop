"use strict";
// import * as express from "express"
// import * as bodyParser from "body-parser"
// import { Request, Response } from "express"
// import { AppDataSource } from "./data-source"
// import { Routes } from "./routes"
// import { User } from "./entity/User"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = process.env.PORT || 8080;
app.get('/', function (_req, res) {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', function (_req, res) {
    return res.send('pong 🏓');
});
app.listen(port, function () {
    return console.log("Server is listening on ".concat(port));
});
//# sourceMappingURL=index.js.map