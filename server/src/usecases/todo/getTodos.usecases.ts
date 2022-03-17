import { TodoModel } from '../../domain/model/todo';
import { ITodoRepository } from '../../domain/repositories/TodoRepository.interface';

export class getTodosUseCases {
  constructor(private readonly ITodoRepository: ITodoRepository) {}

  async execute(): Promise<TodoModel[]> {
    return await this.ITodoRepository.findAll();
  }
}
