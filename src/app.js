// Webpack configured to handle files in other modules.
import React from 'react';
import ReactDOM from 'react-dom';

// Babel configured to manaje JSX.
const template = <p>Movies with webpack</p>;

ReactDOM.render(
    template, document.getElementById('app')
);
