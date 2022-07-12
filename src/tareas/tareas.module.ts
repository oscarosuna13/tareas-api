import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tareas, TareasSchema } from 'src/schemas/tareas.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tareas.name, schema: TareasSchema }])],
  controllers: [TareasController],
  providers: [TareasService]
})
export class TareasModule {}
