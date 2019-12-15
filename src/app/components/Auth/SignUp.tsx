import React, { useContext } from 'react';
import { TextField, AuthWrapper } from '../../library';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../contexts/Firebase';
import _ from 'lodash';
import ROUTES from '../../constants/routes';
import { Formik, Form, Field, useField, FormikHelpers } from 'formik';
import { TextFieldProps } from '../../library/types';
import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { ToasterContext, useToaster } from '../../contexts/Toaster/Toaster';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
  username: string;
}

const SignUp: React.FC = props => {
  const { t, i18n } = useTranslation('auth');
  const history = useHistory();
  const { addToast } = useToaster();

  const initialFormValues = { email: '', password: '', username: '' } as FormValues;
  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, t('error.username.long'))
      .max(50, t('error.username.long'))
      .required(t('error.required')),
    email: Yup.string()
      .email(t('error.email.invalid'))
      .required(t('error.required')),
    password: Yup.string()
      .min(6, t('error.password.length'))
      .required(t('error.required')),
  });

  const handleOnSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log('faasdfasdf :');
    const { email, username, password } = values;
    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser: any) => {
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            addToast('success', 'Your account has been created');
            history.push(ROUTES.HOME);
          })
          .catch((error: any) => {
            addToast('error', error.message);
          });
      })
      .catch(error => {
        addToast('error', error.message);
      });
  };

  return (
    <AuthWrapper>
      <h1 className="text-center">{t('signUp')}</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={SignupSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleChange, handleBlur, values }) => (
          <Form>
            <Field type="text" name="username" label={t('username')} as={TextField} />
            <Field type="text" name="email" label={t('email')} as={TextField} />
            <Field type="password" name="password" label={t('password')} as={TextField} />
            <button type="submit">{t('submit')}</button>
            <button onClick={() => addToast('success', 'This is an error')}>Add a toaster</button>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};
export default withAuthentication(SignUp);
{
  /*  */
}
