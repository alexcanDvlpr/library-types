"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carSchema = void 0;
const mongoose_1 = require("mongoose");
exports.carSchema = new mongoose_1.Schema({
    _id: { type: String },
    brand: { type: String },
    model: { type: String },
    itv: { type: Boolean }
});
