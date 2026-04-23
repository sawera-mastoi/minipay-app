'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/Button';
import { Card, CardBody } from './ui/Card';
import { AlertCircle } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * ErrorBoundary component to catch JavaScript errors anywhere in its child component tree.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[400px] p-6">
          <Card className="max-w-md w-full border-red-500/20 bg-red-500/5">
            <CardBody className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-red-500/10 rounded-full">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-xl font-bold">Something went wrong</h2>
              <p className="text-neutral-400 text-sm">
                An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
              </p>
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
                className="mt-2"
              >
                Refresh Page
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    }

    return this.children;
  }
}
