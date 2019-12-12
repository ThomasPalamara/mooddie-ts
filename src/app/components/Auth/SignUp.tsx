import React, { useContext } from 'react';
import { TextField, AuthWrapper } from '../../library';

import { useHistory } from 'react-router-dom';
import { auth, db } from '../../contexts/Firebase';
import _ from 'lodash';
import ROUTES from '../../constants/routes';
import { Formik, Form, Field, useField, FormikHelpers } from 'formik';
import { TextFieldProps } from '../../library/types';
import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { ToasterContext, useToaster } from '../../contexts/Toaster/Toaster';

interface FormValues {
  email: string;
  password: string;
  userName: string;
}

const SignUp: React.FC = props => {
  const history = useHistory();
  const { addToast } = useToaster();
  const initialFormValues = { email: '', password: '', userName: '' } as FormValues;

  const handleOnSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    const { email, userName, password } = values;
    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser: any) => {
        console.log('authUser :', authUser);

        db.doCreateUser(authUser.user.uid, userName, email)
          .then(() => {
            console.log(' ');
          })
          .catch((error: any) => {
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
            <button type="submit">submit</button>
          </Form>
        )}
      />
      <button onClick={() => addToast('error', 'This is an error')}>Add a toaster</button>
    </AuthWrapper>
  );
};

export default withAuthentication(SignUp);
