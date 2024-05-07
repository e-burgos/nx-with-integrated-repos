import { useQuery } from '@tanstack/react-query';

export const useGetPeople = () => {
  return useQuery({
    queryKey: ['people', 'loans'],
    queryFn: async () => {
      const res = await fetch('https://swapi.dev/api/people/');
      return res.json();
    },
  });
};
