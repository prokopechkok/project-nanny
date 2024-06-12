const AppointmentForm = ({ name, avatar }) => {
  return (
    <div>
      <p>{name}</p>
      <img src={avatar} alt={name} />
    </div>
  );
};

export default AppointmentForm;
