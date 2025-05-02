import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IEmpleado extends mongoose.Document {  
    sueldo: number;
    nombre: string;
    horario: string;
    cargo: string;
}

 const EmpleadoSchema = new Schema(
    {
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
    }
    
 );

const Empleado = mongoose.model<IEmpleado>("Empleado", EmpleadoSchema);
export default Empleado;