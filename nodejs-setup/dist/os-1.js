"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const my_computer = os_1.default.cpus();
const info = os_1.default.arch();
console.log(my_computer);
console.log(info);
