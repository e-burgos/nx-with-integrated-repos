import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface CounterBoxProps {
  title?: string;
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterBox: React.FC<CounterBoxProps> = ({
  title,
  count,
  increment,
  decrement,
}) => {
  return (
    <Box
      sx={{
        p: '10px 20px',
        width: '300px',
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: 4,
        margin: 2,
      }}
    >
      <Typography variant="body1">{title || 'Counter'}</Typography>
      <Button onClick={decrement}>-</Button>
      <span>{count}</span>
      <Button onClick={increment}>+</Button>
    </Box>
  );
};

export default CounterBox;
