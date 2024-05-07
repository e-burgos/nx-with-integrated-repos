/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';

export const useGetShared = (
  key?: string[],
  reactQueryFn?: () => Promise<any>
) => {
  return useQuery({
    queryKey: !key ? ['shared', 'default'] : key,
    queryFn: reactQueryFn
      ? reactQueryFn
      : async () => {
          const res = await fetch('https://swapi.dev/api/starships/');
          return res.json();
        },
  });
};

export default useGetShared;
