"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoRoutes = void 0;
const empleado_controller_1 = require("../controllers/empleado.controller");
class EmpleadoRoutes {
    constructor() {
        this.empleadoController = new empleado_controller_1.EmpleadoController();
    }
    routes(app) {
        app.route('/empleado')
            .get(this.empleadoController.obtenerEmpleados)
            .post(this.empleadoController.crearEmpleado);
        app.route('/empleado/:id')
            .put(this.empleadoController.actualizarEmpleado)
            .delete(this.empleadoController.eliminarEmpleado);
    }
}
exports.EmpleadoRoutes = EmpleadoRoutes;
//# sourceMappingURL=empleado.routes.js.map