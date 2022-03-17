import { TodoModel } from '../../domain/model/todo';
import { ITodoRepository } from '../../domain/repositories/TodoRepository.interface';

export class GetTodoUseCases {
  constructor(private readonly ITodoRepository: ITodoRepository) {}

  async execute(id: number): Promise<TodoModel> {
    return await this.ITodoRepository.findById(id);
  }
}
