package com.bekh.jwt.controller;

import com.bekh.jwt.entity.Course;
import com.bekh.jwt.service.CoursesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class CourseController {

    private final CoursesService courseManagementService;

    public CourseController(CoursesService courseManagementService) {
        this.courseManagementService = courseManagementService;
    }

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseManagementService.findAll();
    }

    @GetMapping("/courses/{id}")
    public Course getCourse(@PathVariable long id) {
        return courseManagementService.findById(id);
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable long id,
            @RequestBody Course course) {

        courseManagementService.updateCourseById(course.getDescription(), id);

        Course updatedCourse = courseManagementService.findById(id);

        return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
    }

    @PostMapping("/courses")
    public ResponseEntity<Void> createCourse(@RequestBody Course course) {

        Course createdCourse = courseManagementService.save(course);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable long id) {
        courseManagementService.deleteById(id);

        return ResponseEntity.noContent().build();
    }
}

