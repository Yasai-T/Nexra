import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/states';

export const useTodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return {
    todoList,
  };
};
