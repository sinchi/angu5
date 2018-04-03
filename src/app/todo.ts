export class Todo {
  id: number;
  done: boolean;
  name: string;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
