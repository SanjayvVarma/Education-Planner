import React, { useState, useEffect } from 'react';
import SubjectForm from '../component/SubjectForm';
import StudySchedule from '../component/StudySchedule';
import './LandingScreen.css'

const LandingScreen = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {

        const storedSubjects = JSON.parse(localStorage.getItem('subjects')) || [];
        setSubjects(storedSubjects);
    }, []);

    const handleAddSubject = (newSubject) => {

        const updatedSubjects = [...subjects, newSubject];
        setSubjects(updatedSubjects);
        localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    };

    const handleAdjustHours = (subjectIndex, adjustment) => {

        const updatedSubjects = [...subjects];
        updatedSubjects[subjectIndex].hours += adjustment;
        setSubjects(updatedSubjects);
        localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    };

    return (
        <div className="app">
            <h1>Geekster Education Planner</h1>
            <SubjectForm onAddSubject={handleAddSubject} />
            <StudySchedule subjects={subjects} onAdjustHours={handleAdjustHours} />
        </div>
    );
};

export default LandingScreen;
