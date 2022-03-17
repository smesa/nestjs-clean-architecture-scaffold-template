import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Todo } from '../entities/todo.entity';
import { DatabaseITodoRepository } from './todo.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Todo])],
  providers: [DatabaseITodoRepository],
  exports: [DatabaseITodoRepository],
})
export class RepositoriesModule {}
