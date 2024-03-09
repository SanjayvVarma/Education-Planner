import React, { useState } from 'react';

const SubjectForm = ({ onAddSubject }) => {
  const [subjectName, setSubjectName] = useState('');
  const [studyHours, setStudyHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subjectName.trim() !== '') {
      const newSubject = { name: subjectName, hours: parseInt(studyHours, 10) };
      onAddSubject(newSubject);
      setSubjectName('');
      setStudyHours(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subject Name:
        <input
          type="text"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
      </label>
      <label >
        Study Hours:
        <input
          type="number"
          value={studyHours}
          onChange={(e) => setStudyHours(e.target.value)}
          style={inputStyle}
        />
      </label>
      <button className='submit' type="submit">Add</button>
    </form>
  );
};

const inputStyle = {
    width: '70px',
   
  };


export default SubjectForm;

