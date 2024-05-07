import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetPlanets } from '../../queries/useGetPlanets';

export function Planets() {
  const { data, isSuccess, isLoading } = useGetPlanets();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'fit-content',
        padding: 2,
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'fit-content',
          padding: 2,
          width: '50%',
          border: '1px solid black',
          borderRadius: '5px',
        }}
      >
        <Typography variant="body1">Local Query Example</Typography>
        {isLoading && <CircularProgress />}
        {isSuccess && (
          <ul>
            {data?.results.map((planet: { name: string }) => (
              <li key={planet.name}>{planet.name}</li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
}

export default Planets;
