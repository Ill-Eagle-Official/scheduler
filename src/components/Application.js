// Base dependencies
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// Components
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointments";
// Helpers
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const schedule = dailyAppointments.map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
      />
    );
  });

  const setDay = (day) => setState({ ...state, day });
  const setDays = (days) => setState(prev => ({ ...prev, days }));


  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  })


  

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
        {dailyAppointments.map((appointment) => {
          return (
            <Appointment
              key={appointment.id}
              {...appointment}
            />
          );
        }
        )}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
