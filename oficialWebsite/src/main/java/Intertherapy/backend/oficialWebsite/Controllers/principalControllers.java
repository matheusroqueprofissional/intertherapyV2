package Intertherapy.backend.oficialWebsite.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class principalControllers {
    @GetMapping("teste")
    public String teste() {
        return "funfo";
    }
}