/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetShared } from '@membrane-webapp-mfe/queries';
import { Box, CircularProgress, Typography } from '@mui/material';

interface QueryContainerProps {
  queryKey?: string[];
  queryFn?: () => Promise<any>;
}

export function QueryContainer({ queryKey, queryFn }: QueryContainerProps) {
  const { data, isSuccess, isLoading } = useGetShared(queryKey, queryFn);
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
        <Typography variant="body1">{`${
          queryKey || 'Shared'
        } Query Example`}</Typography>
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

export default QueryContainer;
