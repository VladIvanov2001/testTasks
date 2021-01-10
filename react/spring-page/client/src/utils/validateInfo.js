export const validateInfo = (values) => {
  const errors = {};
  if (!values.username.trim()) {
    errors.username = 'Username is required';
  } else if (values.username.length < 3) {
    errors.username = 'Username must contain 3 symbols or more';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = 'Input correct email';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password must contain 4 symbols or more';
  } else if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(values.password)) {
    errors.password = 'must contain at Password east 1 number and 1 letter';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Please, repeat password';
  } else if (values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Passwords dont match';
  }
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'First name must contain 3 symbols or more';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Last name must contain 3 symbols or more';
  }
  if (!values.age) {
    errors.age = 'Age is required';
  } else if (values.age <= 0) {
    errors.age = 'Age should be more than 0';
  }

  return errors;
};
