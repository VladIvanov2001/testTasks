import './Registration.css';
import React from 'react';
import { useHistory } from 'react-router';
import API from '../../utils/API';
import { useForm } from '../../utils/useForm';

export function Registration({ isLogin }) {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
  } = useForm();
  const history = useHistory();
  const fetchLogin = async () => {
    await API.post('auth/registration', {
      username: values.username,
      password: values.password,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      age: values.age,
    })
      .then(() => {
        if (Object.keys(errors).length === 0) {
          history.push('/main');
          isLogin(true);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <input
          type="text"
          name="repeatPassword"
          placeholder="repeat password"
          value={values.repeatPassword}
          onChange={handleChange}
        />
        {errors.repeatPassword && <p className="error">{errors.repeatPassword}</p>}
      </div>
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="lastname"
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div>
        <input
          type="number"
          name="age"
          placeholder="age"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <button type="submit" onClick={fetchLogin}>Send</button>
    </form>
  );
}
