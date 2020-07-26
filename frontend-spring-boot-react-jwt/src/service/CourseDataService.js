import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

class CourseDataService {
  retrieveAllCourses = () => axios.get(`${BASE_URL}/courses`)

  deleteCourse = (id) => axios.delete(`${BASE_URL}/courses/${id}`)

  retrieveCourse = (id) => axios.get(`${BASE_URL}/courses/${id}`)

  updateCourse = (id, course) => axios.put(`${BASE_URL}/courses/${id}`, course)

  createCourse = (course) => axios.post(`${BASE_URL}/courses/`, course)
}

export default new CourseDataService();
