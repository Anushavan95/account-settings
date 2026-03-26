import Alert from '@mui/material/Alert';
import type { SimpleAlertProps } from './types';

export default function SimpleAlert({ message, severity = 'success' }: SimpleAlertProps) {
  return <Alert severity={severity}>{message}</Alert>;
}
