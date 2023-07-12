package com.course;

import java.util.List;
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

}



