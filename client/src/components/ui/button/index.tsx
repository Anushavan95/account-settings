import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import type { ButtonProps } from '@mui/material';
type CustomButtonProps = {
  loading?: boolean;
  text?: string;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
  loading = false,
  text,
  children,
  disabled,
  ...props
}) => {
  return (
    <Button {...props} disabled={disabled || loading} variant={props.variant || 'contained'}>
      {loading ? <CircularProgress size={20} color="inherit" /> : text || children}
    </Button>
  );
};

export default CustomButton;
