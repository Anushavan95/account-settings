type Severity = 'success' | 'error' | 'warning' | 'info';

export interface SimpleAlertProps {
  message: string;
  severity?: Severity;
}
