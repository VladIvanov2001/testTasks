import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { LoginForm } from './components/LoginForm/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Redirect to="/login" />
      <div className="App">
        <Switch>
          <Route path="/main">
            <>
              <Header />
              <Main />
            </>
          </Route>
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
