import React, { useState } from 'react';
import {
  Route, BrowserRouter,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Registration } from './components/Registration/Registration';

// eslint-disable-next-line react/prop-types
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Route
        path="/login"
        render={() => (
          <LoginForm
            isLogin={setIsLoggedIn}
          />
        )}
      />
      {isLoggedIn
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
          <Registration
            isLogin={setIsLoggedIn}
          />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
