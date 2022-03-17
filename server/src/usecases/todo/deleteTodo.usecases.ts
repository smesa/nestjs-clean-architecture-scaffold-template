import { ILogger } from '../../domain/logger/logger.interface';
import { ITodoRepository } from '../../domain/repositories/TodoRepository.interface';

export class deleteTodoUseCases {
  constructor(private readonly logger: ILogger, private readonly ITodoRepository: ITodoRepository) {}

  async execute(id: number): Promise<void> {
    await this.ITodoRepository.deleteById(id);
    this.logger.log('deleteTodoUseCases execute', `Todo ${id} have been deleted`);
  }
}
