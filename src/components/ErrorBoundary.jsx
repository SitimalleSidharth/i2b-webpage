import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log this error to an analytics service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030509] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Something went wrong.</h1>
          <p className="text-gray-400 mb-8">We couldn't load this section. Please try refreshing.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-[#6AE3FF] text-black font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;