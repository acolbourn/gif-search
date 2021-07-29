import { Component } from 'react';

interface Props {
  fallback: React.ReactNode;
}

export class ErrorBoundary extends Component<Props> {
  state = { error: null };

  static defaultProps: Props = {
    fallback: [],
  };

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
