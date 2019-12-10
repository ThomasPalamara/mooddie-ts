import React from 'react';
import { TextField, AuthWrapper } from '../../library';

import { useHistory } from 'react-router-dom';
import { auth, db } from '../../contexts/Firebase';
import _ from 'lodash';
import ROUTES from '../../constants/routes';
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
  const history = useHistory();
  // console.log('firebase :', firebase);
  const initialFormValues = { email: '', password: '', userName: '' } as FormValues;
  const handleOnSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log('values :', values);
    const { email, userName, password } = values;
    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser: any) => {
        console.log('authUser :', authUser);
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, userName, email)
          .then(() => {
            // history.push(ROUTES.HOME);
            console.log('user added to the db');
          })
          .catch(error => {
            console.log('error :', error);
          });
      })
      .catch(error => {
        console.log('error auth :', error);
      });
  };

  return (
    <AuthWrapper>
      <h1>Formik x TypeScript</h1>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleOnSubmit}
        render={({ handleChange, handleBlur, values }) => (
          <Form>
            <Field type="text" name="userName" label="userName" as={TextField} />
            <Field type="text" name="email" label="Email" as={TextField} />
            <Field type="password" name="password" label="Password" as={TextField} />
            <button type="submit">asdf</button>
          </Form>
        )}
      />
    </AuthWrapper>
  );
};

export default withAuthentication(SignUp);
