import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { selectError } from '../../redux/auth/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { login } from '../../redux/auth/operations';

const loginSchema = yup
  .object({
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

const LoginForm = () => {
  const error = useSelector(selectError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();

  const onFormSubmit = ({ email, password }) => {
    dispatch(login({ email, password }));
    if (error) {
      toast.error('Invalid login or password.');
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <input {...register('email')} placeholder="Email" />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input {...register('password')} placeholder="Password" />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit" onSubmit={onFormSubmit}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
