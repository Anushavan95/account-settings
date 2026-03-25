import { type ErrorInfo, type ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKeys?: unknown[];
}

export interface State {
  hasError: boolean;
  error: Error | null;
}
