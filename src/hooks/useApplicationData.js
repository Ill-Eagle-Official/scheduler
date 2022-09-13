import {useEffect, useState} from "react";
import axios from "axios";

export default function useApplicationData() {

  // sets the state for the application
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });
  
  // sets the state for the day
  const setDay = (day) => setState({ ...state, day });
  
  // useEffect function to retrieve JSON data from API
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);
  
  // function to update the spots remaining
  function numOfSpots (increment, state) {
    console.log("spots")
    let stateDay = state.days.find((day) => day.name === state.day);
    let newDay = { ...stateDay, spots: stateDay.spots + increment };

    console.log("newDay", newDay)
    console.log("stateDay", stateDay)

    return state.days.map((day) => (day.name === state.day ? newDay : day));
  };

  // calls a PUT request to update the appointment data as per user input
  function bookInterview(id, interview) {
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.put(`/api/appointments/${id}`, appointment)
    .then(() => {
      setState({
        ...state,
        appointments,
        days: numOfSpots(-1, state)
      })
    });
  }
  
  // calls a DELETE request to update the appointment data as per user input
  function cancelInterview(id) {
    
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios.delete(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState({
          ...state,
          appointments, 
          days: numOfSpots(1, state)
        })
      });
    }


  return { state, setDay, bookInterview, cancelInterview };

}