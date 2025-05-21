import { EmpleadoRoutes } from "./modules/empleado/routes/empleado.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private empleadoRoutes: EmpleadoRoutes = new EmpleadoRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.empleadoRoutes.routes(app);
    }
}