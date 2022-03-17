import { DynamicModule, Module } from '@nestjs/common';

import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { RepositoriesModule } from '../repositories/repositories.module';

import { DatabaseITodoRepository } from '../repositories/todo.repository';

import { UseCaseProxy } from './usecases-proxy';
import { GetTodoUseCases } from '../../usecases/todo/getTodo.usecases';
import { getTodosUseCases } from '../../usecases/todo/getTodos.usecases';
import { addTodoUseCases } from '../../usecases/todo/addTodo.usecases';
import { updateTodoUseCases } from '../../usecases/todo/updateTodo.usecases';
import { deleteTodoUseCases } from '../../usecases/todo/deleteTodo.usecases';

import { LoggerService } from '../logger/logger.service';

@Module({
  imports: [LoggerModule, RepositoriesModule, ExceptionsModule],
})
export class UsecasesProxyModule {
  static GET_TODO_USECASES_PROXY = 'getTodoUsecasesProxy';
  static GET_TODOS_USECASES_PROXY = 'getTodosUsecasesProxy';
  static POST_TODO_USECASES_PROXY = 'postTodoUsecasesProxy';
  static DELETE_TODO_USECASES_PROXY = 'deleteTodoUsecasesProxy';
  static PUT_TODO_USECASES_PROXY = 'putTodoUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseITodoRepository],
          provide: UsecasesProxyModule.GET_TODO_USECASES_PROXY,
          useFactory: (ITodoRepository: DatabaseITodoRepository) => new UseCaseProxy(new GetTodoUseCases(ITodoRepository)),
        },
        {
          inject: [DatabaseITodoRepository],
          provide: UsecasesProxyModule.GET_TODOS_USECASES_PROXY,
          useFactory: (ITodoRepository: DatabaseITodoRepository) =>
            new UseCaseProxy(new getTodosUseCases(ITodoRepository)),
        },
        {
          inject: [LoggerService, DatabaseITodoRepository],
          provide: UsecasesProxyModule.POST_TODO_USECASES_PROXY,
          useFactory: (logger: LoggerService, ITodoRepository: DatabaseITodoRepository) =>
            new UseCaseProxy(new addTodoUseCases(logger, ITodoRepository)),
        },
        {
          inject: [LoggerService, DatabaseITodoRepository],
          provide: UsecasesProxyModule.PUT_TODO_USECASES_PROXY,
          useFactory: (logger: LoggerService, ITodoRepository: DatabaseITodoRepository) =>
            new UseCaseProxy(new updateTodoUseCases(logger, ITodoRepository)),
        },
        {
          inject: [LoggerService, DatabaseITodoRepository],
          provide: UsecasesProxyModule.DELETE_TODO_USECASES_PROXY,
          useFactory: (logger: LoggerService, ITodoRepository: DatabaseITodoRepository) =>
            new UseCaseProxy(new deleteTodoUseCases(logger, ITodoRepository)),
        },
      ],
      exports: [
        UsecasesProxyModule.GET_TODO_USECASES_PROXY,
        UsecasesProxyModule.GET_TODOS_USECASES_PROXY,
        UsecasesProxyModule.POST_TODO_USECASES_PROXY,
        UsecasesProxyModule.PUT_TODO_USECASES_PROXY,
        UsecasesProxyModule.DELETE_TODO_USECASES_PROXY,
      ],
    };
  }
}
