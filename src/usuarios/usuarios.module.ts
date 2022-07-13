import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuarios, UsuariosSchema } from 'src/schemas/usuarios.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Usuarios.name, schema: UsuariosSchema }])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {}
