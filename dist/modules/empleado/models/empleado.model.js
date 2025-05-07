"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpleadoSchema = new Schema({
    sueldo: {
        type: Number,
        required: [true, 'sueldo required'],
        unique: false
    },
    nombre: {
        type: String,
        required: [true, 'nombre required'],
        unique: true
    },
    horario: {
        type: String,
        required: [true, 'horario required'],
        unique: false
    },
    cargo: {
        type: String,
        required: [true, 'cargo required'],
        unique: false
    }
});
const Empleado = mongoose.model("Empleado", EmpleadoSchema);
exports.default = Empleado;
//# sourceMappingURL=empleado.model.js.map