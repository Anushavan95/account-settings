import { Component, type ErrorInfo } from 'react';
import type { Props, State } from '@/hoc/ErrorBoundry/types';
import { DefaultFallback } from '@/components/ui/DefaultFallback/DefaultFallback';

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.state.hasError &&
      this.props.resetKeys &&
      prevProps.resetKeys !== this.props.resetKeys
    ) {
      this.reset();
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError && error) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(error);
      }

      return this.props.fallback ?? <DefaultFallback onRetry={this.reset} />;
    }

    return this.props.children;
  }
}
