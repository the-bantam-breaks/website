import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../routes';
import NoMatch from './NoMatch';

class App extends Component {
    render () {
        return (
            <div id="app">
                <Switch>
                    {routes.map(({ path, exact, component: Component }) => (
                      <Route key={path} path={path} exact={exact} component={Component} />
                    ))}
                    <Route render={(props) => <NoMatch {...props} /> } />
                </Switch>
            </div>
        )
    }
}

export default App;
