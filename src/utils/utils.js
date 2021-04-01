import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(150, 'Must be 150 characters or less')
    .required('Required'),
  release_date: Yup.date()
    .required('Required'),
  poster_path: Yup.string()
    .url('Invalid Url')
    .required('Required'),
  overview: Yup.string()
    .max(1000, 'Must be 100 characters or less')
    .required('Required'),
  runtime: Yup.number()
    .integer('Must be an integer')
    .required('Required'),
});
