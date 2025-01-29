"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const demo = path_1.default.basename(__dirname, "output.txt");
const filetype = path_1.default.join("folder", "subfolder", "message.txt");
console.log(filetype);
console.log("SEE:", demo);
