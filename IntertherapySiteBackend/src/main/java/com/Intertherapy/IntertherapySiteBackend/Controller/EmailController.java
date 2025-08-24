package com.Intertherapy.IntertherapySiteBackend.Controller;

import com.Intertherapy.IntertherapySiteBackend.Services.emailService;
import com.Intertherapy.sendEmail.ApiResponse;
import com.Intertherapy.sendEmail.sendEmailRecord;
import com.Intertherapy.IntertherapySiteBackend.Services.emailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.events.EventException;

@RestController
@CrossOrigin(origins = "https://intertherapy.com.br")
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private emailService emailservice;

    @PostMapping("/sendemail")
    public ResponseEntity<ApiResponse> sendEmail(@RequestBody sendEmailRecord sendemail ) {
        try{
               
        emailservice.enviarEmailTexto(
                sendemail.from(),
                sendemail.subject(),
                "formulario de contato: \n\n"+
                "\nNome completo:"+sendemail.name()+
                "\nEmail:"+sendemail.from()+
                "\nAssunto:"+sendemail.subject()+
                "\nMensagem:"+sendemail.message() 
        );
        return new ResponseEntity<>(new ApiResponse(true, "Email enviado com sucesso!"), HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println("erro ao enviar email: ");
            return new ResponseEntity<>(new ApiResponse(false, "Erro ao enviar email: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);        }
    }
}
