import { guid } from '@datorama/akita';

export interface Todo {
  id: string;
  completed: boolean;
  desc: string;
}

export function createTodo(desc: string): Todo {
  return {
    id: guid(),
    desc,
    completed: false
  } as Todo;
}
