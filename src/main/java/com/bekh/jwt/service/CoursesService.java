package com.bekh.jwt.service;

import com.bekh.jwt.entity.Course;
import com.bekh.jwt.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class CoursesService {
    private final CourseRepository courseRepository;

    public CoursesService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public void deleteById(long id) {
       courseRepository.deleteById(id);
    }

    @Transactional
    public void updateCourseById(String description, long id) {
      courseRepository.updateCourseById(description, id);
    }

    public Course save(Course course) {
        return courseRepository.save(course);
    }

    public Course findById(long id) {
      return courseRepository.findById(id);
    }
}
