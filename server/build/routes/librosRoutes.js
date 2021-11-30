"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const librosController_1 = __importDefault(require("../controllers/librosController"));
class LibrosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', librosController_1.default.list);
        this.router.get('/:id', librosController_1.default.getOne);
        this.router.post('/', librosController_1.default.create);
        this.router.put('/:id', librosController_1.default.update);
        this.router.delete('/:id', librosController_1.default.delete);
    }
}
const librosRoutes = new LibrosRoutes();
exports.default = librosRoutes.router;
