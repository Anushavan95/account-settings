import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

interface DynamicTypographyProps extends TypographyProps {
  colorVariant?:
    | 'primary.main'
    | 'secondary.main'
    | 'success.main'
    | 'error.main'
    | 'warning.main'
    | 'info.main'
    | 'text.primary'
    | 'text.secondary';
}

const DynamicTypography: React.FC<DynamicTypographyProps> = ({
  colorVariant = 'text.primary',
  children,
  sx,
  ...props
}) => {
  return (
    <Typography
      {...props}
      sx={{
        color: colorVariant,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default DynamicTypography;
