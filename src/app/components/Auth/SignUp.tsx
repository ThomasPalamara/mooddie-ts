import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Formik, Form, useField, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';

import { auth, db } from '../../contexts/Firebase';
import ROUTES from '../../constants/routes';
import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { useToaster } from '../../contexts/Toaster';

interface FormValues {
  email: string;
  password: string;
  username: string;
}

const Signup: React.FC = () => {
  const { t } = useTranslation('auth');
  const history = useHistory();
  const { addToast } = useToaster();

  const initialFormValues = { email: '', password: '', username: '' } as FormValues;
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, t('error.username.short'))
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
    const { email, username, password } = values;
    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser: any) => {
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            addToast('success', t('signup.completed'));
            history.push(ROUTES.HOME);
          })
          .catch((error: any) => {
            addToast('error', error.message);
          });
      })
      .catch(error => {
        addToast('error', error.message);
      });
    setSubmitting(false);
  };

  const Field = ({ ...props }) => {
    const { name, type } = props;
    const [field, meta] = useField(name);
    return (
      <TextField
        {...field}
        {...props}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error}
        type={type}
      />
    );
  };

  return (
    <div>
      <h1 className="auth-title">{t('signup.title')}</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={SignupSchema}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <Field type="text" name="username" label={t('username')} />
          <Field type="text" name="email" label={t('email')} />
          <Field type="password" name="password" label={t('password')} />
          <Button type="submit">{t('submit')}</Button>
        </Form>
      </Formik>
    </div>
  );
};
export default withAuthentication(Signup);
