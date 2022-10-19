import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetList = () => {
  const { data } = useSWR('https://dummyjson.com/todos', fetcher);
  return data;
};

export const useGetDetail = (id: number) => {
  const { data } = useSWR(`https://dummyjson.com/todos/${id}`, fetcher);
  return data;
};
