import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  const [appointmentData, setAppointmentData] = useState(null);

  const onFormSubmit = (formData) => setAppointmentData(formData);
  console.log(appointmentData);

  return (
    <div>
      <h2>Make an appointment with a babysitter</h2>
      <p>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div>
        <img src={avatar} alt={name} />
        <div>
          <p>Your nanny</p>
          <h3>{name}</h3>
        </div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div>
            <div>
              <div>
                <input {...register('address')} placeholder="Address" />
                <p>{errors.address?.message}</p>
              </div>
              <div>
                <input {...register('age')} placeholder="Child's age" />
                <p>{errors.age?.message}</p>
              </div>
            </div>
            <div>
              <div>
                <input {...register('phone')} placeholder="00:00" />
                <p>{errors.phone?.message}</p>
              </div>
              <div>
                <input {...register('email')} placeholder="Email" />
                <p>{errors.email?.message}</p>
              </div>
            </div>
            <div>
              <input {...register('email')} placeholder="Email" />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <input
                {...register('name')}
                placeholder="Father's or mother's name"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <textarea
                {...register('comment')}
                placeholder="Comment"
                rows={4}
              ></textarea>
              <p>{errors.comment?.message}</p>
            </div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
