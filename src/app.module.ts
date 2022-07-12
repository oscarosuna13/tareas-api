import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [UsuariosModule, MongooseModule.forRoot('mongodb://localhost:27017/gestion_tareas'), TareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
