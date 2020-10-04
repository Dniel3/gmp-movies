import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactModal from 'react-modal';

import Footer from './components/footer/footer';
import Logo from './components/logo/logo';
import Header from './containers/header/header';
import Home from './containers/home/home';
import ErrorBoundary from './error_boundary';

import './app.scss';
import { Provider } from 'react-redux';
import store, { useTypedSelector } from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './containers/notfound/not_found';



ReactModal.setAppElement('#app');

const App = () => {
    const movies = useTypedSelector(state => state.movies);

    return (<>
            <ErrorBoundary hasErrors={false}>
                <Router>
                    <Header />
                        <Switch>
                            <Route exact path="/"><Home /></Route> 
                            <Route path="/search"><Home movies={...movies} /></Route>
                            <Route exact path="/orderBy"><Home movies={...movies} /></Route>
                            <Route exact path="/filter"><Home movies={...movies} /></Route>
                            <Route path="*"><NotFound /></Route>
                        </Switch>
                    <Footer><Logo /></Footer>
                </Router>
            </ErrorBoundary>
            </>);
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
);
