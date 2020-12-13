import './LoginForm.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

export function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const checkData = () => {
    if (login === 'admin' && password === '1234') {
      history.push('/main');
    }
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
      <button type="submit" onClick={checkData}>Send</button>
    </form>
  );
}
