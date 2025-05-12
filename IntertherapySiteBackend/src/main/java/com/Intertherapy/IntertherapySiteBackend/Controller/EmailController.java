package com.Intertherapy.IntertherapySiteBackend.Controller;

import com.Intertherapy.IntertherapySiteBackend.Services.emailService;
import com.Intertherapy.IntertherapySiteBackend.Services.emailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private emailService emailservice;

    @PostMapping("/sendemail")
    public void sendEmail() {
        emailservice.enviarEmailTexto(
                "matheus.roquedebrito@gmail.com",
                "Email de Teste",
                "Email de teste do DTI -- Matheus"
        );
    }
}
