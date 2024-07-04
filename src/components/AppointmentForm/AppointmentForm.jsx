import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import * as yup from 'yup';
import { Icon } from '../Icon/Icon';
import DatePicker from 'react-datepicker';
import css from './AppointmentForm.module.css';
import clsx from 'clsx';

const phoneRegExp = /^\+[0-9]{1,3}[0-9]{3}[0-9]{3}[0-9]{4}$/;
const timeRegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const appointmentSchema = yup
  .object({
    address: yup.string().required('Address is required'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Not valid phone number')
      .required('Phone number is required'),
    age: yup.string().required('Age is required'),
    time: yup
      .string()
      .matches(timeRegExp, 'Not valid time format')
      .required('Time is required'),
    name: yup.string().required('Name is required'),
    comment: yup.string(),
  })
  .required();

const AppointmentForm = ({ name, avatar }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  const [appointmentData, setAppointmentData] = useState(null);

  const onFormSubmit = (formData) => setAppointmentData(formData);
  console.log(appointmentData);

  return (
    <div className={css.container}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>
          Make an appointment <br />
          with a babysitter
        </h2>
        <p className={css.text}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
      </div>
      <div className={css.avatarWrapper}>
        <img src={avatar} alt={name} className={css.avatar} />
        <div className={css.nameWrapper}>
          <p>Your nanny</p>
          <h3 className={css.name}>{name}</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit(onFormSubmit)} className={css.form}>
        <div className={css.halfInputs}>
          <div>
            <input
              {...register('address')}
              placeholder="Address"
              className={css.input}
            />
            <p>{errors.address?.message}</p>
          </div>
          <div>
            <input
              {...register('phone')}
              placeholder="+380"
              className={css.input}
            />
            <p>{errors.phone?.message}</p>
          </div>
          <div>
            <input
              {...register('age')}
              placeholder="Child's age"
              className={css.input}
            />
            <p>{errors.age?.message}</p>
          </div>
          <div className={css.timeInput}>
            <Controller
              control={control}
              name="time"
              render={({ field }) => (
                <DatePicker
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Meeting time"
                  placeholderText="00:00"
                  dateFormat="HH:mm"
                  timeFormat="HH:mm"
                  value={field.value}
                  selected={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  id="time"
                  className={css.customTime}
                  // popperClassName={css.popper}
                  // popperModifiers={{
                  //   offset: {
                  //     enabled: true,
                  //     offset: '0, 8',
                  //   },
                  //   preventOverflow: {
                  //     enabled: true,
                  //     escapeWithReference: false,
                  //     boundariesElement: 'viewport',
                  //   },
                  //   setWidth: {
                  //     enabled: true,
                  //     fn: (data) => {
                  //       data.styles.width = '150px';
                  //       return data;
                  //     },
                  //   },
                  // }}
                />
              )}
            ></Controller>
            {/* <input {...register('time')} placeholder="00:00" /> */}
            <p>{errors.time?.message}</p>
            <Icon id="clock" className={css.clockIcon} />
          </div>
        </div>

        <div>
          <input
            {...register('email')}
            placeholder="Email"
            className={css.input}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input
            {...register('name')}
            placeholder="Father's or mother's name"
            className={css.input}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <textarea
            {...register('comment')}
            placeholder="Comment"
            rows={4}
            className={clsx(css.input, css.textarea)}
          />
          <p>{errors.comment?.message}</p>
        </div>
        <button type="submit" onSubmit={onFormSubmit} className={css.submitBtn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
