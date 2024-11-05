package intertherapy.backend.Controlers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping()
public class controlersRoutes {

    @GetMapping("test")
    public String test() {
        return "test";
    }

}
