import React from 'react';
import {
  Route, BrowserRouter,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Registration } from './components/Registration/Registration';
import { store } from './redux/store';

function App() {
  const isLog = store.getState().isLogin;
  console.log(isLog);
  return (
    <BrowserRouter>
      <Route
        path="/login"
        render={() => (
          <LoginForm />
        )}
      />
      {isLog
      && (
        <Route path="/main">
          <>
            <Header />
            <Main />
          </>
        </Route>
      )}
      <Route
        path="/registration"
        render={() => (
          <Registration />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
