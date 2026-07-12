import React, { Component, ErrorInfo, ReactNode } from 'react';
import { BeamsBackground } from './ui/beams-background';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Optional developer-facing debug logs can go here
  }

  public handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="relative overflow-x-hidden bg-bg text-dark min-h-screen flex flex-col justify-between">
          <BeamsBackground className="relative text-bg min-h-screen flex flex-col justify-center items-center py-28 px-6 text-center overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-accent text-dark text-xs font-sans font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                  System Alert
                </span>
                <h1 className="font-sans font-black text-bg text-4xl md:text-6xl leading-tight tracking-tight">
                  Something went wrong.
                </h1>
                <p className="text-bg/60 text-lg max-w-md mx-auto font-sans leading-relaxed">
                  An unexpected error has occurred. Please reload the page or head back to the Home page.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <button
                  onClick={() => window.location.reload()}
                  className="cta-button inline-block bg-white text-dark font-sans font-semibold py-4 px-8 rounded-full hover:bg-[#FBFAF1] active:scale-[0.99] transition-all shadow-md cursor-pointer"
                >
                  Reload Page
                </button>
                <button
                  onClick={this.handleReset}
                  className="cta-button inline-block bg-accent text-dark font-sans font-semibold py-4 px-8 rounded-full hover:bg-accent-warm active:scale-[0.99] transition-all shadow-md cursor-pointer"
                >
                  ← Go Home
                </button>
              </div>
            </div>
          </BeamsBackground>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
