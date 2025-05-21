import { Request, Response } from 'express';
import * as _ from 'lodash';
import Empleado from '../models/empleado.model';
import { exec } from 'child_process';

export class EmpleadoController {
    crearEmpleado = (req: Request, res: Response) => {
        console.log('body-->', req.body);
        const nuevaEmpleado = new Empleado({
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
    }

    obtenerEmpleados = (req: Request, res: Response) => {
        Empleado.find()
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
    }

    actualizarEmpleado = (req: Request, res: Response) => {
        Empleado.findByIdAndUpdate(req.params.id,{
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
    }

    eliminarEmpleado = (req: Request, res: Response) => {
        Empleado.findByIdAndDelete(req.params.id)
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
    }
}