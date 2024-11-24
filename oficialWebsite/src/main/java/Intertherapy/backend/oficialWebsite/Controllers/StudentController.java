package Intertherapy.backend.oficialWebsite.Controllers;

import Intertherapy.backend.oficialWebsite.model.Student;
import Intertherapy.backend.oficialWebsite.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping("/student")
    public String index(){
        return "hello world";
    }

    @PostMapping("/store")
    public Student saveStudent(@RequestBody Student student){
        return studentService.create(student);
    }
}
