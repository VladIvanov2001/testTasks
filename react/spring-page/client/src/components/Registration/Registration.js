import './Registration.css';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import API from '../../utils/API';
import { setLoginIsTrue } from '../../redux/actions/action';

export function Registration() {
  const history = useHistory();
  const password = useRef({});
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
    watch,
  } = useForm();
  password.current = watch('password', '');
  const onSubmit = async (data) => {
    await API.post('auth/registration', {
      username: data.username,
      password: data.password,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
    });
    dispatch(setLoginIsTrue(true));
    history.push('/main');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"
          ref={register({
            required: true,
            minLength: 3,
          })}
        />
        {errors.username && errors.username.type === 'required'
        && <p>This is required</p>}
        {errors.username && errors.username.type === 'minLength'
        && <p>Minimal length is 3</p>}
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          ref={register({
            required: true,
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          })}
        />
        {errors.email && errors.email.type === 'required'
        && <p>This is required</p>}
        {errors.email && errors.email.type === 'pattern'
        && <p>Please, input correct email</p>}
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="password"
          ref={register({
            required: true,
            minLength: 4,
            pattern: /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i,
          })}
        />
        {errors.password && errors.password.type === 'required'
        && <p>This is required</p>}
        {errors.password && errors.password.type === 'minLength'
        && <p>Minimal length is 4</p>}
        {errors.password && errors.password.type === 'pattern'
        && <p>Password should at least 1 number and 1 letter</p>}
      </div>
      <div>
        <input
          type="text"
          name="repeatPassword"
          placeholder="repeat password"
          ref={register({
            required: true,
            minLength: 4,
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
        />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
      </div>
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          ref={register({
            required: true,
            minLength: 3,
          })}
        />
        {errors.firstName && errors.firstName.type === 'required'
        && <p>This is required</p>}
        {errors.firstName && errors.firstName.type === 'minLength'
        && <p>Minimal length is 3</p>}
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="lastname"
          ref={register({
            required: true,
            minLength: 3,
          })}
        />
        {errors.lastName && errors.lastName.type === 'required'
        && <p>This is required</p>}
        {errors.lastName && errors.lastName.type === 'minLength'
        && <p>Minimal length is 3</p>}
      </div>
      <div>
        <input
          type="number"
          name="age"
          placeholder="age"
          ref={register({ required: true })}
        />
        {errors.age && errors.age.type === 'required'
        && <p>This is required</p>}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
