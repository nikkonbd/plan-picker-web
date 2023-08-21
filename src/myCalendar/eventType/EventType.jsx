import React, { useState } from 'react';

function EventType() {
  const [host, setHost] = useState({
    eventName: 'Birthday Party',
    invitedAttendees: ['Alice', 'Bob', 'Charlie'],
  });

  const addAttendee = (attendee) => {
    setHost(prevHost => ({
      ...prevHost,
      invitedAttendees: [...prevHost.invitedAttendees, attendee],
    }));
  };

  const removeAttendee = (attendee) => {
    setHost(prevHost => ({
      ...prevHost,
      invitedAttendees: prevHost.invitedAttendees.filter(name => name !== attendee),
    }));
  };

  return (
    <div className="App">
      <h1>{host.eventName}</h1>
      <h2>Invited Attendees:</h2>
      <ul>
        {host.invitedAttendees.map((attendee, index) => (
          <li key={index}>
            {attendee}
            <button onClick={() => removeAttendee(attendee)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addAttendee('New Attendee')}>Add Attendee</button>
    </div>
  );
}

export default EventType;
