import { EmpleadoController } from "../controllers/empleado.controller";

export class EmpleadoRoutes {
    private empleadoController: EmpleadoController = new EmpleadoController(); 
    
    public routes(app): void {
        app.route('/empleado')
        .get(this.empleadoController.obtenerEmpleados)
        .post(this.empleadoController.crearEmpleado);

        app.route('/empleado/:id')
        .put(this.empleadoController.actualizarEmpleado)
        .delete(this.empleadoController.eliminarEmpleado);
    }
}