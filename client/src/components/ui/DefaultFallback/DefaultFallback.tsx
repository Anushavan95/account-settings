import { Box } from '@mui/material';
import DynamicTypography from '@/components/ui/typography';
import type { FallbackProps } from './types';
import CustomButton from '../button';

export const DefaultFallback = ({ onRetry }: FallbackProps) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <DynamicTypography variant="h6" colorVariant="error">
        Something went wrong
      </DynamicTypography>

      <CustomButton variant="contained" color="primary" onClick={onRetry}>
        Try again
      </CustomButton>
    </Box>
  );
};
