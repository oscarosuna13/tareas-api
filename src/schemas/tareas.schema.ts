import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Usuarios } from '../schemas/usuarios.schema'

export type TareasDocument = Tareas & Document;

@Schema()
export class Tareas {
  @Prop({required: true})
  titulo: string;

  @Prop({required: true})
  descripcion: string;
  
  @Prop({required: true})
  status: string;

  @Prop({required: true})
  fechaEntrega: Date;

  @Prop()
  comentarios: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios'})
  responsable: Usuarios;

  @Prop([String])
  tags: string[];


}

export const TareasSchema = SchemaFactory.createForClass(Tareas);
