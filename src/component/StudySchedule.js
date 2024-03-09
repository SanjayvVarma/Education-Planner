import React from 'react';

const StudySchedule = ({ subjects, onAdjustHours }) => {
  return (
    <div>
      <h2>Study Schedule</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.name} - {subject.hours} hours
            <button className="plus" onClick={() => onAdjustHours(index, 1)}>+</button>
            <button className="minus" onClick={() => onAdjustHours(index, -1)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudySchedule;