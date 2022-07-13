import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Header, Redirect } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ObjectId } from 'mongoose';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get(':user/:pass')
  findTareas(@Param('user') user: string, @Param('pass') pass: string) {
    return this.usuariosService.findTareas(user, pass);
  }

}
