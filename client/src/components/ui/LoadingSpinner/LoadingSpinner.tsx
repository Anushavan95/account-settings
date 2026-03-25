import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, CircularProgress } from '@mui/material';
import type { CenteredContainerProps, LoadingSpinnerProps } from './types';

export const CenteredContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'minHeight',
})<CenteredContainerProps>(({ theme, minHeight }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight,
  gap: theme.spacing(2),
}));

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  minHeight = '100vh',
}) => {
  return (
    <CenteredContainer minHeight={minHeight}>
      <CircularProgress size={size} />
    </CenteredContainer>
  );
};
