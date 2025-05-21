"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const empleado_routes_1 = require("./modules/empleado/routes/empleado.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.empleadoRoutes = new empleado_routes_1.EmpleadoRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.empleadoRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map