import { useQuery } from '@tanstack/react-query';

export const useGetPlanets = () => {
  return useQuery({
    queryKey: ['planets', 'dashboard'],
    queryFn: async () => {
      const res = await fetch('https://swapi.dev/api/planets/');
      return res.json();
    },
  });
};
