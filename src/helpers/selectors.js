// helper function to match ids in the dayObj and final array
export function matchId(state, array) {
  const match = array.map((id) => state[id]);
  return match;
}


// Retrieves the appointment info from state to use as props for the Appointment component
export function getAppointmentsForDay(state, day) {

  const dayObj = state.days.find((dayObj) => dayObj.name === day);

  if (!dayObj) {
    return [];
  }

  const appointmentArr = dayObj.appointments.map((id) => state.appointments[id]);

  return appointmentArr;
  
}

// Retrieves the interview info from state to use as props for the Appointment component

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const interviewer = state.interviewers[interview.interviewer];

  return { ...interview, interviewer };
  
  }

// Retrieves the interviewer info from state to use as props for the Appointment component

export function getInterviewersForDay(state, day) {

  const dayObj = state.days.find((dayObj) => dayObj.name === day);

  if (!dayObj) {
    return [];
  }

  const interviewerArr = dayObj.interviewers.map((id) => state.interviewers[id]);

  return matchId(state.interviewers, interviewerArr);
  
}