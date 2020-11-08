import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactModal from 'react-modal';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import Footer from './components/footer/Footer';
import Logo from './components/logo/Logo';
import Header from './containers/header/Header';
import Home from './containers/home/Home';
import ErrorBoundary from './ErrorBoundary';

import './App.scss';
import store from './redux/store';
import NotFound from './containers/notfound/NotFound';
import { moviesSelector } from './redux/selectors';

ReactModal.setAppElement('#app');

const App = () => {
  const movies = useSelector(moviesSelector);

  return (
    <>
      <ErrorBoundary hasErrors={false}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/search"><Home movies={movies} /></Route>
            <Route exact path="/orderBy"><Home movies={movies} /></Route>
            <Route exact path="/filter"><Home movies={movies} /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
          <Footer><Logo /></Footer>
        </Router>
      </ErrorBoundary>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
