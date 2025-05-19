package com.Intertherapy.IntertherapySiteBackend.Controller;

import com.Intertherapy.IntertherapySiteBackend.Services.emailService;
import com.Intertherapy.sendEmail.sendEmailRecord;
import com.Intertherapy.IntertherapySiteBackend.Services.emailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.events.EventException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private emailService emailservice;

    @PostMapping("/sendemail")
    public String sendEmail(@RequestBody sendEmailRecord sendemail ) {
        try{
        emailservice.enviarEmailTexto(
                sendemail.from(),
                sendemail.to(),
                sendemail.about(),
                sendemail.message()
        );
        return "email enviado com sucesso: ";
        }
        catch(Exception e){
            System.out.println("erro ao enviar email: "+e);
            return "erro ao enviar email"+e;
        }
    }
}
