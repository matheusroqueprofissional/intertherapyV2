package Intertherapy.backend.oficialWebsite.Controllers;

import Intertherapy.backend.oficialWebsite.model.Employer;
import Intertherapy.backend.oficialWebsite.model.SendImagesCarousel;
import Intertherapy.backend.oficialWebsite.model.Treatment;
import Intertherapy.backend.oficialWebsite.service.EmployerService;
import Intertherapy.backend.oficialWebsite.service.SendImagesCarouselService;
import Intertherapy.backend.oficialWebsite.service.TreatmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/system")
@CrossOrigin(origins = "http://localhost:4200") // Permite chamadas do Angular
public class principalControllers {

    @Autowired
    TreatmentService treatmentService;
    @Autowired
    SendImagesCarouselService sendImagesCarouselService;
    @Autowired
    EmployerService employerService;

    @GetMapping("/teste")
    public String teste() {
        return "funfo";
    }

    @PostMapping("/saveTreatments")
    public Treatment saveTreatment(@RequestBody Treatment treatment) {return treatmentService.create(treatment);}

    @PostMapping("/saveEmployer")
    public Employer saveEmployer(@RequestBody Employer employer) {return employerService.create(employer);}

    @PostMapping("/saveCarouselContent")
    public SendImagesCarousel saveSendImagesCarousel(@RequestBody SendImagesCarousel sendImagesCarousel) {return sendImagesCarouselService.create(sendImagesCarousel);}

}