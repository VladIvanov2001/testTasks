import './LoginForm.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import API from '../../utils/API';

// eslint-disable-next-line react/prop-types
export function LoginForm({ isLogin }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const fetchLogin = async () => {
    try {
      const response = await API.post('/signup', {
        username: login,
        password,
      });
      localStorage.setItem('token', response.data.token);
      isLogin(true);
      history.push('/main');
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
