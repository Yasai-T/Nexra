import { atom } from 'recoil';

const TODO_LIST_STATE = 'todoListState';

export type Todo = {
  id: string;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<Todo[]>({
  key: TODO_LIST_STATE,
  default: [
    {
      id: 'todo-id',
      text: 'default text',
      isComplete: false,
    },
  ],
});
