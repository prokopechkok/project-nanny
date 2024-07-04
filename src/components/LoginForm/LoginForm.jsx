import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { selectError } from '../../redux/auth/selectors';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import { Icon } from '../Icon/Icon';
import { useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);

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
  const handlePassVisible = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div className={css.container}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>Log In</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)} className={css.form}>
        <div>
          <input
            {...register('email')}
            placeholder="Email"
            className={css.input}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className={css.passWrapper}>
          <input
            // type={isVisible ? 'text' : 'password'}
            type="password"
            {...register('password')}
            placeholder="Password"
            className={css.input}
          />
          <p>{errors.password?.message}</p>
          <button
            type="button"
            className={css.eyeBtn}
            onClick={handlePassVisible}
          >
            {isVisible ? (
              <Icon id="eye" className={css.eyeIcon} />
            ) : (
              <Icon id="eye-off" className={css.eyeIcon} />
            )}
          </button>
        </div>
        <button type="submit" onSubmit={onFormSubmit} className={css.submitBtn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
