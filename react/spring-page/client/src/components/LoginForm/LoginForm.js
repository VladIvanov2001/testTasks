import './LoginForm.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import API from '../../utils/API';

export function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const fetchLogin = async () => {
    await API.post('/register', {
      username: login,
      password,
    }).then(() => {
      history.push('/main');
    }, (error) => {
      console.log(error);
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="login"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={fetchLogin}>Send</button>
    </form>
  );
}
