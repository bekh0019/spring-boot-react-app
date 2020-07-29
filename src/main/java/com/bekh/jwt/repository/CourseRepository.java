package com.bekh.jwt.repository;

import com.bekh.jwt.entity.Course;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
    List<Course> findAll();

    Course findById(long id);

    @Modifying
    @Query("update Course c set c.description = :description where c.id = :id")
    void updateCourseById(@Param("description") String description, @Param("id") long userId);
}
