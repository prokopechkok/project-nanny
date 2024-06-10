import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { selectError } from '../../redux/auth/selectors';
import { registerUser } from '../../redux/auth/operations';
import { toast } from 'react-toastify';

const registrationSchema = yup
  .object({
    name: yup
      .string()
      .min(2, 'Must be at least 2 characters')
      .required('Name is required'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 characters')
      .required('Password is required'),
  })
  .required();

const RegistrationForm = () => {
  const error = useSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const dispatch = useDispatch();

  const onFormSubmit = ({ email, password, name }) => {
    dispatch(registerUser({ email, password, name }));
    if (error) {
      toast.error('Invalid login or password.');
    }
  };
  return (
    <div>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <input {...register('name')} placeholder="Name" />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input {...register('email')} placeholder="Email" />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input {...register('password')} placeholder="Password" />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit" onSubmit={onFormSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
