import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required field'),
  number: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters')
    .required('Required field'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await dispatch(addContact(values)).unwrap();
      resetForm();
    } catch (error) {
      console.error('Failed to add contact:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
          <div>
            <Field
              name="number"
              type="tel"
              placeholder="Phone number"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add contact'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
