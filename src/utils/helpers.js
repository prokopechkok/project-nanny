export const sortNannies = (nannies, filter) => {
  let sortedNannies = [...nannies];

  switch (filter) {
    case 'A to Z':
      sortedNannies.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Z to A':
      sortedNannies.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'Less than 10$':
      sortedNannies = nannies
        .filter((nanny) => nanny.price_per_hour < 10)
        .sort((a, b) => b.price_per_hour - a.price_per_hour);
      break;
    case 'Greater than 10$':
      sortedNannies = nannies
        .filter((nanny) => nanny.price_per_hour > 10)
        .sort((a, b) => a.price_per_hour - b.price_per_hour);
      break;
    case 'Popular':
      sortedNannies.sort((a, b) => b.rating - a.rating);
      break;
    case 'Not popular':
      sortedNannies.sort((a, b) => a.rating - b.rating);
      break;
    case 'Show all':
      break;
    default:
      break;
  }
  return sortedNannies;
};
// export const saveAppointment = async (appointment) => {
//   try {
//     await push(ref(database, 'appointments'), appointment);
//   } catch {
//     toast.error(`Something went wrong. Please try again.`);
//   }
// };
