import { NextPage } from 'next';
import Head from 'next/head';
import { useTodoList } from '../hooks/useTodoList';

const RecoilPage: NextPage = () => {
  const { todoList } = useTodoList();

  return (
    <>
      <Head>
        <title>recoil</title>
      </Head>
      <div>
        {todoList.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    </>
  );
};

export default RecoilPage;
