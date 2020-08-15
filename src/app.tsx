// Webpack configured to handle files in other modules.
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Footer from './components/footer/footer';
import Logo from './components/logo/logo';
import Header from './containers/header/header';
import Home from './containers/home/home';

import './app.scss';
import ErrorBoundary from './error_boundary';

const template = <>
                    <Header />
                    // Error boundary logic will change later. 
                       Set prop value to true to see Error MessageChannel.
                    <ErrorBoundary hasErrors={false}>
                        <Home />
                    </ErrorBoundary>
                    <Footer><Logo /></Footer>
                 </>;

ReactDOM.render(
    template, document.getElementById('app')
);
