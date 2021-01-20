import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';

// Term filtering constants
const termMap = { F: 'Fall', W: "Winter", S: "Spring" }
const terms = Object.values(termMap)

// Function to get a course's term
const getCourseTerm = course => (
    termMap[course.id.charAt(0)]
);


// Dynamic courselist component
const CourseList = ({courses}) => {
    // Initialize filtering state
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => getCourseTerm(course) === selectedTerm);

    // Render
    return (
        <ScrollView>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <CourseSelector courses={termCourses} />
        </ScrollView>
    );
};

export default CourseList