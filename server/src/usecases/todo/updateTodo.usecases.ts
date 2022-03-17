import { ILogger } from '../../domain/logger/logger.interface';
import { ITodoRepository } from '../../domain/repositories/TodoRepository.interface';

export class updateTodoUseCases {
  constructor(private readonly logger: ILogger, private readonly ITodoRepository: ITodoRepository) {}

  async execute(id: number, isDone: boolean): Promise<void> {
    await this.ITodoRepository.updateContent(id, isDone);
    this.logger.log('updateTodoUseCases execute', `Todo ${id} have been updated`);
  }
}
