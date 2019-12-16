import React from 'react';
import { TextField, AuthWrapper, Button } from '../../library';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { auth } from '../../contexts/Firebase';
import ROUTES from '../../constants/routes';
import { Formik, Form, useField, FormikHelpers } from 'formik';
import { withAuthentication } from '../../contexts/Firebase/withAuthentication';
import { useToaster } from '../../contexts/Toaster/Toaster';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
  username: string;
}

const SignUp: React.FC = props => {
  const { t } = useTranslation('auth');
  const history = useHistory();
  const { addToast } = useToaster();

  const initialFormValues = { email: '', password: '' } as FormValues;
  const SignInSchema = Yup.object().shape({
    email: Yup.string().required(t('error.required')),
    password: Yup.string().required(t('error.required')),
  });

  const handleOnSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    const { email, password } = values;
    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        addToast('error', error.message);
      });
    setSubmitting(false);
  };

  const Field = ({ ...props }) => {
    const [field, meta] = useField(props.name);
    return (
      <TextField
        {...field}
        {...props}
        error={meta.touched && meta.error ? meta.error : null}
        type={props.type}
      />
    );
  };

  return (
    <AuthWrapper>
      <h1 className="text-center">{t('signIn.title')}</h1>
      <Formik
        initialValues={initialFormValues}
        validationSchema={SignInSchema}
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
export default withAuthentication(SignUp);
