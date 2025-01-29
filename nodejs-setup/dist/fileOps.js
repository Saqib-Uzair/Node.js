"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync("message.txt", "Hello This is the message!");
const context = fs_1.default.readFileSync("message.txt", "utf-8");
console.log(context);
