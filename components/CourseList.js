import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Course from './Course';
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
    const [selectedTerm, setSelectedTerm] = useState('Spring');
    const termCourses = courses.filter(course => getCourseTerm(course) === selectedTerm);

    // Render
    return (
        <ScrollView>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <View style={styles.courseList}>
                {termCourses.map(course => <Course key={course.id} course={course} />) }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default CourseList