package com.course;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.HttpStatusCode;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {"https://localhost:3000"})
@RestController
@RequestMapping("/courses")

public class CourseController {
    @Autowired
    private CourseRepository courseRepository;


    @GetMapping("/getCourses")
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }

    @PostMapping("/addCourse")
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        Course course1 = courseRepository.save(course);
        return new ResponseEntity<>(course1, HttpStatus.OK);
    }

    @DeleteMapping("/deleteCourse/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        Optional<Course> course = courseRepository.findById(id);
        if (course.isPresent()) {
            courseRepository.delete(course.get());
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}



