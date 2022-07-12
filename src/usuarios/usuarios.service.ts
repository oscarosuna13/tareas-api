import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Usuarios, UsuariosDocument } from 'src/schemas/usuarios.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuarios.name) private usuariosModel: Model<UsuariosDocument>) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuarios> {
    return new this.usuariosModel(createUsuarioDto).save();
  }

  async findAll() {
    return this.usuariosModel.find();
  }

  async findOne(_id: ObjectId) {
    return this.usuariosModel.findOne({ _id });
  }

  async update(_id: ObjectId, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosModel.updateOne({ _id }, {$set: {...updateUsuarioDto}});
  }

  async remove(_id: ObjectId) {
    return this.usuariosModel.deleteOne({ _id });
  }
}
