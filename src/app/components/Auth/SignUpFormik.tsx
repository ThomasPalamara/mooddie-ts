import React, { useState } from 'react';
import { TextField, AuthWrapper } from '../../library';

import { useHistory } from 'react-router-dom';
import { auth, db } from '../../contexts/Firebase';
import _ from 'lodash';

import { Formik, Form, Field, useField, FormikHelpers } from 'formik';
import { TextFieldProps } from '../../library/types';
import { withAuthentication } from '../../contexts/Firebase/withAuthentication';

interface FormValues {
  email: string;
  password: string;
  userName: string;
}

const SignUp: React.FC = props => {
  console.log('props :', props);
  // const firebase = useFireBaseContext();
  // const history = useHistory();
  // console.log('firebase :', firebase);
  const initialFormValues = { email: '', password: '', userName: '' } as FormValues;
  const [values, setValues] = useState(initialFormValues);
  console.log('values :', values);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  const handleBlur = (e: React.ChangeEvent) => {
    console.log('e :', e);
  };

  const inputs = [];

  return (
    <AuthWrapper>
      <h1>Formik x TypeScript</h1>
      <form>
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.userName}
          type="text"
          name="userName"
          label="userName"
        />
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          type="email"
          name="email"
          label="Email"
        />
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          type="password"
          name="password"
          label="Password"
        />
      </form>
    </AuthWrapper>
  );
};

export default withAuthentication(SignUp);
