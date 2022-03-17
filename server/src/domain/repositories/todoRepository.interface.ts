import { TodoModel } from '../model/todo';

export interface ITodoRepository {
  insert(todo: TodoModel): Promise<TodoModel>;
  findAll(): Promise<TodoModel[]>;
  findById(id: number): Promise<TodoModel>;
  updateContent(id: number, isDone: boolean): Promise<void>;
  deleteById(id: number): Promise<void>;
}
