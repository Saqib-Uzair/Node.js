"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end("Hello World!");
});
const PORT = 8080;
server.listen(PORT, () => {
    console.log("Sever is runnig at http://localhost:", PORT);
});
