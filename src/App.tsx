import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useHistory } from 'react-router-dom';

import './App.scss';
import { User } from './core/models';
import store from './core/store';
import Dashboard from './dashboard/containers/Dashboard';
import Home from './home/containers/Home';

const App = () => {
  const [route, setRoute] = useState<string>('signin');
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    joined: '',
  });

  const onRouteChange = (route: string): void => {
    setRoute(route);
  };

  const loadeUser = (user: User): void => {
    setUser(user);
  };

  // return (
  //   <div className="app">
  //     {route === 'home' ? (
  //       <Home onRouteChange={onRouteChange} user={user} />
  //     ) : route === 'signin' ? (
  //       <Signin onRouteChange={onRouteChange} loadeUser={loadeUser} />
  //     ) : (
  //       <Register onRouteChange={onRouteChange} loadeUser={loadeUser} />
  //     )}
  //   </div>
  // );

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/*" render={() => <Redirect to="/home" />} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
