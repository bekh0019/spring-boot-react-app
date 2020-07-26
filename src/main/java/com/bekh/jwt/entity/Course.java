package com.bekh.jwt.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Course {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String courseName;
    private String description;

    public Course(Long id, String courseName, String description) {
        this.id = id;
        this.description = description;
        this.courseName = courseName;
    }
    public Course(){
    }
}
