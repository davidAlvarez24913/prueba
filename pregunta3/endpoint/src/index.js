"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.get('/prueba', (_, res) => {
    console.log("hola mundo");
    res.send("hola mundo");
    res.statusMessage = '200';
});
app.listen(PORT, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server runnin on port ${PORT}`);
});
