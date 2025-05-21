"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoController = void 0;
const empleado_model_1 = require("../models/empleado.model");
class EmpleadoController {
    constructor() {
        this.crearEmpleado = (req, res) => {
            console.log('body-->', req.body);
            const nuevaEmpleado = new empleado_model_1.default({
                sueldo: Number(req.body.sueldo),
                nombre: req.body.nombre,
                horario: req.body.horario,
                cargo: req.body.cargo
            });
            nuevaEmpleado.save()
                .then(empleadoCreado => {
                res.status(201).json({
                    ok: true,
                    empleado: empleadoCreado,
                    message: 'Empleado creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Empleado no creada'
                });
            });
        };
        this.obtenerEmpleados = (req, res) => {
            empleado_model_1.default.find()
                .then(empleados => {
                res.status(200).json({
                    ok: true,
                    empleados: empleados
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarEmpleado = (req, res) => {
            empleado_model_1.default.findByIdAndUpdate(req.params.id, {
                sueldo: req.body.sueldo,
                nombre: req.body.nombre,
                horario: req.body.horario,
                cargo: req.body.cargo
            })
                .exec()
                .then(empleadoActualizada => {
                res.status(200).json({
                    ok: true,
                    empleado: empleadoActualizada
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Empleado no actualizada'
                });
            });
        };
        this.eliminarEmpleado = (req, res) => {
            empleado_model_1.default.findByIdAndDelete(req.params.id)
                .then(empleadoEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Empleado eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'Empleado no eliminada'
                });
            });
        };
    }
}
exports.EmpleadoController = EmpleadoController;
//# sourceMappingURL=empleado.controller.js.map