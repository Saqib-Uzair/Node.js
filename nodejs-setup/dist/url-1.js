"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
const parseUrl = url_1.default.parse("https://www.iba.edu.pk/");
console.log(parseUrl.hostname);
console.log(parseUrl.pathname);
console.log(parseUrl.path);
