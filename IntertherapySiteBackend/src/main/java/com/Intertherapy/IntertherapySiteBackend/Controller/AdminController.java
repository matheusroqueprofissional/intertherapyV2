package com.Intertherapy.IntertherapySiteBackend.Controller;

import com.Intertherapy.IntertherapySiteBackend.Employer.EmployerClass;
import com.Intertherapy.IntertherapySiteBackend.Employer.EmployerRecord;
import com.Intertherapy.IntertherapySiteBackend.Employer.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/admin")
public class AdminController {

    @Autowired
    EmployerRepository employerRepository;

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @PostMapping("/RegisterEmployer")
    public String ResgisterEmployer(@RequestBody EmployerRecord employer){
        employerRepository.save(new EmployerClass(null,employer.Name(),employer.Resume(),employer.imageUrl(),employer.Area()));
        System.out.println(employer);
        return employer.toString();
    }
}
