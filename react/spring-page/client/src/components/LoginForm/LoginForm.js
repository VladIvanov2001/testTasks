import './LoginForm.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import API from '../../utils/API';
import { setLoginIsTrue } from '../../redux/actions/action';

export function LoginForm() {
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const history = useHistory();
  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await API.post('auth/signup', {
        username: login,
        password,
      });
      localStorage.setItem('token', response.data.token);
      dispatch(setLoginIsTrue(response.data.token));
      history.push('/main');
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit">Send</button>
    </form>
  );
}
