import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { selectError } from '../../redux/auth/selectors';
import { registerUser } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import css from './RegistrationForm.module.css';
import { useState } from 'react';
import { Icon } from '../Icon/Icon';

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
  const [isVisible, setIsVisible] = useState(false);

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
  const handlePassVisible = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div className={css.container}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>Registration</h2>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)} className={css.form}>
        <div>
          <input
            {...register('name')}
            placeholder="Name"
            className={css.input}
          />
          <p>{errors.name?.message}</p>
        </div>
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
