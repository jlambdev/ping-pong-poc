"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.set('port', 4000);
app.get('/ping', (_req, res) => {
    res.send({ message: 'pong' });
});
exports.default = app;
//# sourceMappingURL=app.js.map