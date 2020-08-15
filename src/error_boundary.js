import React from 'react';

const ErrorBoundary = (props) => {
    const ErrorMessage = (
        <h2>An Error happended while loading movies, please try again.</h2>
    );

return <>{props.hasErrors ? ErrorMessage : props.children}</>
};

export default ErrorBoundary
