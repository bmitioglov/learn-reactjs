import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  release_date: Yup.date()
    .required('Required'),
  poster_path: Yup.string()
    .url('Invalid Url')
    .required('Required'),
  overview: Yup.string()
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
  runtime: Yup.number()
    .integer('Must be an integer')
    .required('Required'),
});
