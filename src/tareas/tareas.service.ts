import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Tareas, TareasDocument } from 'src/schemas/tareas.schema';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Injectable()
export class TareasService {

  constructor(@InjectModel(Tareas.name) private tareasModel: Model<TareasDocument>) {}

  async create(createTareaDto: CreateTareaDto): Promise<Tareas> {
    return new this.tareasModel(createTareaDto).save();
  }

  async findOne(_id: ObjectId) {
    return this.tareasModel.findOne({ _id });
  }

  async update(_id: ObjectId, updateTareaDto: UpdateTareaDto) {
    return this.tareasModel.updateOne({ _id }, {$set: {...updateTareaDto}});
  }

  async remove(_id: ObjectId) {
    return this.tareasModel.deleteOne({ _id });
  }
}
