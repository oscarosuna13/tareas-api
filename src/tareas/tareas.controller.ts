import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { ObjectId } from 'mongoose';

@Controller('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post()
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.tareasService.create(createTareaDto);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: ObjectId) {
    return this.tareasService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: ObjectId, @Body() updateTareaDto: UpdateTareaDto) {
    return this.tareasService.update(_id, updateTareaDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: ObjectId) {
    return this.tareasService.remove(_id);
  }
}
