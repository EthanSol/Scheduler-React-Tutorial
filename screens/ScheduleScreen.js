import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import CourseList from '../components/CourseList';
import UserContext from '../UserContext';
import CourseEditScreen from './CourseEditScreen';

// Title Banner
const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const ScheduleScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';

  // Set course schedule state
  const [schedule, setSchedule] = useState({ title: '', courses: []});

  // Navigation func
  const view = (course) => {
    navigation.navigate(canEdit? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  // Url source of courses
  const scheduleUrl = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  // Fetch data
  useEffect(() => {
    const fetchSchedule =  async () => {
      const response = await fetch(scheduleUrl);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  },
});

export default ScheduleScreen;