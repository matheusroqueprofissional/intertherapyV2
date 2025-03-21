package com.Intertherapy.IntertherapySiteBackend.Controller;

import com.Intertherapy.IntertherapySiteBackend.Employer.EmployerClass;
import com.Intertherapy.IntertherapySiteBackend.Employer.EmployerRecord;
import com.Intertherapy.IntertherapySiteBackend.Employer.EmployerRepository;
import com.Intertherapy.IntertherapySiteBackend.Treatment.TreatmentClass;
import com.Intertherapy.IntertherapySiteBackend.Treatment.TreatmentRecord;
import com.Intertherapy.IntertherapySiteBackend.Treatment.TreatmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/admin")
public class AdminController {

    @Autowired
    EmployerRepository employerRepository;
    @Autowired
    TreatmentRepository treatmentRepository;

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @PostMapping("/RegisterEmployer")
    public String ResgisterEmployer(@RequestBody EmployerRecord employer){
        employerRepository.save(new EmployerClass(null,employer.Name(),employer.Resume(),employer.ImageUrl(),employer.Area()));
        return employer.toString();
    }

    @PostMapping("/RegisterTreatment")
    public String RegisterTreatment(@RequestBody TreatmentRecord treatment){
        treatmentRepository.save(new TreatmentClass(null,treatment.Name(),treatment.Description(),treatment.UrlImage(),treatment.Area()));
        return treatment.toString();
    }


}
