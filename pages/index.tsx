import { NextPage } from 'next';
import { mutate } from 'swr';
import { useGetDetail, useGetList } from '../src/useGet';

const Home: NextPage = () => {
  const list = useGetList();
  const doto1 = useGetDetail(1);
  const doto2 = useGetDetail(2);

  return (
    <div>
      <h1>SWR 検証</h1>
      <p>使用したダミーデータ取得API</p>
      <a href='https://dummyjson.com/'>https://dummyjson.com/</a>

      <hr />

      <h2>Do fetch buttons</h2>
      <button onClick={() => mutate('https://dummyjson.com/todos')}>
        {`mutate('https://dummyjson.com/todos')`}
      </button>
      <p>該当するkeyのAPIのみ叩かれる</p>
      <br />
      <button onClick={() => mutate('https://dummyjson.com/todos/')}>
        {`mutate('https://dummyjson.com/todos/')`}
      </button>
      <p>keyとして存在しないので叩かれない</p>
      <br />
      <button onClick={() => mutate('https://dummyjson.com/todos/1')}>
        {`mutate('https://dummyjson.com/todos/1')`}
      </button>
      <p>該当するkeyのAPIのみ叩かれる</p>
      <br />

      <hr />

      <h2>TODO 1（https://dummyjson.com/todos/1）</h2>
      <pre>{JSON.stringify(doto1, null, 4)}</pre>
      <hr />
      <h2>TODO 2（https://dummyjson.com/todos/2）</h2>
      <pre>{JSON.stringify(doto2, null, 4)}</pre>
      <hr />
      <h2>TODO LIST（https://dummyjson.com/todos）</h2>
      <pre>{JSON.stringify(list, null, 4)}</pre>
    </div>
  );
};

export default Home;
