import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Formik, Form, useField, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../contexts/Firebase';
import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { useToaster } from '../../contexts/Toaster';

import { TextField, AuthWrapper, Button } from '../../library';
import ROUTES from '../../constants/routes';

interface FormValues {
  email: string;
  password: string;
  username: string;
}

const Signup: React.FC = () => {
  const { t } = useTranslation('auth');
  const history = useHistory();
  const { addToast } = useToaster();

  const initialFormValues = { email: '', password: '' } as FormValues;
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required(t('error.required')),
    password: Yup.string().required(t('error.required')),
  });

  const handleOnSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    const { email, password } = values;
    auth
      .doLoginWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.HOME);
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
        error={meta.touched && meta.error ? meta.error : null}
        type={type}
      />
    );
  };

  return (
    <AuthWrapper>
      <h1 className="text-center">{t('signIn.title')}</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={LoginSchema}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <Field type="text" name="email" label={t('email')} />
          <Field type="password" name="password" label={t('password')} />
          <Button type="submit">{t('submit')}</Button>
        </Form>
      </Formik>
    </AuthWrapper>
  );
};
export default withAuthentication(Signup);
