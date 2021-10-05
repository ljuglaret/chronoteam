
import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { render } from 'react-dom';
import {Foo} from './MainPage';
import {FormPerson} from './LoginPage';



class LoginPage extends React.Component { 
  render() {
    return (
      <Router>
        <div>
          <Switch>
         <Route exact path="/" component={FormPerson} />
            <Route exact path="/foo" component={Foo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<LoginPage />, document.getElementById('root'));
