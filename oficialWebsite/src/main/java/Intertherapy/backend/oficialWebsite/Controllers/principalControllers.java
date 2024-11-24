package Intertherapy.backend.oficialWebsite.Controllers;

import Intertherapy.backend.oficialWebsite.model.Treatment;
import Intertherapy.backend.oficialWebsite.service.TreatmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class principalControllers {

    @Autowired
    TreatmentService treatmentService;

    @GetMapping("teste")
    public String teste() {
        return "funfo";
    }

    @PostMapping
    public Treatment saveTreatment(@RequestBody Treatment treatment) {return treatmentService.create(treatment);}
}