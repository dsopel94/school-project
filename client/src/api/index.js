import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchCourses = () => axios.get(`${url}/courses`);
export const createCourse = (course) => axios.post(`${url}/courses`, course);
