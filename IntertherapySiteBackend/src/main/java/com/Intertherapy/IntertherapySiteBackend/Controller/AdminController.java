package com.Intertherapy.IntertherapySiteBackend.Controller;
import java.util.List;
import com.Intertherapy.IntertherapySiteBackend.Treatment.TreatmentsClass;
import com.Intertherapy.IntertherapySiteBackend.Treatment.TreatmentsRecord;
import com.Intertherapy.IntertherapySiteBackend.Treatment.TreatmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    TreatmentsRepository treatmentsRepository;

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping("/GetTreatments")
    public List<TreatmentsClass> getTreatments() {
        return treatmentsRepository.findAll();
    }

    @PostMapping("/RegisterTreatment")
    public String ResgisterTreatment(@RequestBody TreatmentsRecord employer){
        treatmentsRepository.save(new TreatmentsClass( employer.Name(), employer.Resume(), employer.ImageUrl(), employer.Area()));
        return employer.toString();
    }

}
