import * as React from 'react';

interface ErrorBoundaryProps {
  hasErrors: boolean;
  children: React.ReactNode;
}

const ErrorBoundary = ({ hasErrors, children }: ErrorBoundaryProps) => {
  const ErrorMessage = (
    <h2>An Error happended while loading movies, please try again.</h2>
  );

  return <>{hasErrors ? ErrorMessage : children}</>;
};

export default ErrorBoundary;
