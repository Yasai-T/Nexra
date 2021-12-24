import { ChangeEvent, useState, VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/states';

let id = 0;
function getId() {
  return id++;
}

export const TodoListCreator: VFC = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((old) => [
      ...old,
      {
        id: getId().toString(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
