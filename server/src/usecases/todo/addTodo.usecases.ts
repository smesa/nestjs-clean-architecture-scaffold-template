import { ILogger } from '../../domain/logger/logger.interface';
import { TodoModel } from '../../domain/model/todo';
import { ITodoRepository } from '../../domain/repositories/TodoRepository.interface';

export class addTodoUseCases {
  constructor(private readonly logger: ILogger, private readonly ITodoRepository: ITodoRepository) {}

  async execute(content: string): Promise<TodoModel> {
    const todo = new TodoModel();
    todo.content = content;
    todo.isDone = false;
    const result = await this.ITodoRepository.insert(todo);
    this.logger.log('addTodoUseCases execute', 'New todo have been inserted');
    return result;
  }
}
