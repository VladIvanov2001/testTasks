import { useState } from 'react';
import { validateInfo } from './validateInfo';

export const useForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    age: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value.replace(/[^A-Za-z0-9_@.]/, ''),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
  };

  return {
    handleChange, handleSubmit, values, errors,
  };
};
