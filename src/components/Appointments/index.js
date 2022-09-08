import React from 'react';
import 'components/Appointments/styles.scss';

// appointment components
import Header from 'components/Appointments/Header';
import Show from 'components/Appointments/Show';
import Empty from 'components/Appointments/Empty';

export default function Appointments(props) {

  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      ) : (
        <Empty onAdd={props.onAdd} />
      )}
    </article>

  )
}