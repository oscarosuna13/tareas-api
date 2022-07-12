import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tareas } from '../schemas/tareas.schema'
import * as mongoose from 'mongoose';


export type UsuariosDocument = Usuarios & Document;

@Schema()
export class Usuarios {
  @Prop({required: true})
  nombre: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tareas' }] })
  tareas: Tareas[];

}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);
