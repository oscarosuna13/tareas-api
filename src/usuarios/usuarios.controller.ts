import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ObjectId } from 'mongoose';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: ObjectId) {
    return this.usuariosService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: ObjectId, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(_id, updateUsuarioDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: ObjectId) {
    return this.usuariosService.remove(_id);
  }
}
