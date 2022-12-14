// Base dependencies
import React from "react";
// Components
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointments";

// Hooks
import useApplicationData from "hooks/useApplicationData";

// Helpers
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
 
  // gets appointments for each day
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  // gets interviewers for each day
  const dailyInterviewers = getInterviewersForDay(state, state.day);
  
  // maps through the appointments for each day and returns the appointment component
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  // returns the application component
  return (
    <main className="layout">
      <section className="sidebar">
      <img
      className="sidebar--centered"
      src="images/logo.png"
      alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList 
      days={state.days} 
      value={state.day} 
      onChange={setDay} />
      </nav>
    <img
      className="sidebar__lhl sidebar--centered"
      src="images/lhl.png"
      alt="Lighthouse Labs"
    />

      </section>
      <section className="schedule">
      {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
