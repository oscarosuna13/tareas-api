import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TareasModule } from './tareas/tareas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gestion_tareas'),
    ConfigModule.forRoot(),
    UsuariosModule,
    TareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
