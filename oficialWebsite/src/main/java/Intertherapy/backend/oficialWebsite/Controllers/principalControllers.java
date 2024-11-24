package Intertherapy.backend.oficialWebsite.Controllers;

import Intertherapy.backend.oficialWebsite.model.Treatment;
import Intertherapy.backend.oficialWebsite.service.TreatmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/system")
public class principalControllers {

    @Autowired
    TreatmentService treatmentService;

    @GetMapping("/teste")
    public String teste() {
        return "funfo";
    }

    @PostMapping("/saveTreatments")
    public Treatment saveTreatment(@RequestBody Treatment treatment) {return treatmentService.create(treatment);}
}