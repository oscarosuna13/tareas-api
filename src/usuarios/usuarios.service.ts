import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Usuarios, UsuariosDocument } from 'src/schemas/usuarios.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuarios.name) private usuariosModel: Model<UsuariosDocument>) {}

  async findTareas(user: string, pass: string) {
    return this.usuariosModel.findOne({ user: user, pass: pass }).populate("tareas", "titulo descripcion -_id").select("tareas  -_id");
  }

}
