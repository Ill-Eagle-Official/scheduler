// Base dependencies
import React from 'react';
import 'components/Appointments/styles.scss';
import useVisualMode from 'hooks/useVisualMode';

// appointment components
import Header from 'components/Appointments/Header';
import Show from 'components/Appointments/Show';
import Empty from 'components/Appointments/Empty';
import Form from 'components/Appointments/Form';
import Status from 'components/Appointments/Status';
// import Confirm from 'components/Appointments/Confirm';
// import Error from 'components/Appointments/Error';




export default function Appointments(props) {
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW));

  }
  
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
          />
      )}
      {mode === SAVING && <Status message="Saving" />}
    </article>

  )
}