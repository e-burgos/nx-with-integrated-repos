import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetPeople } from '../../queries/useGetPeople';

export function People() {
  const { data, isSuccess, isLoading } = useGetPeople();
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
        <Typography variant="body1">Characters Query Example</Typography>
        {isLoading && <CircularProgress />}
        {isSuccess && (
          <ul>
            {data?.results.map((people: { name: string }) => (
              <li key={people.name}>{people.name}</li>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
}

export default People;
