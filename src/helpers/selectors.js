// Retrieves the appointment info from state to use as props for the Appointment component
export function getAppointmentsForDay(state, day) {

  const dayObj = state.days.find((dayObj) => dayObj.name === day);

  if (!dayObj) {
    return [];
  }

  const appointmentArr = dayObj.appointments.map((id) => state.appointments[id]);

  return appointmentArr;
  
}